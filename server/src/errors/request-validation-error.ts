// Import Base Class
import { CustomError } from "./custom-error";
import { ValidationError } from "express-validator";

export class RequestValidationError extends CustomError {
    statusCode = 400

    constructor(public errors: ValidationError[]) {
        super('Invalid request parameter')

        Object.setPrototypeOf(this, RequestValidationError.prototype)
    }

    serializeErrors(): { message: string; field?: string | undefined; }[] {
        return this.errors.map(err => {
            return {message: err.msg, field: err.param}
        })
    }

}