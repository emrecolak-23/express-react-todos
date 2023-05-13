import { SignUpContainer } from "./sign-up-form.styles";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { useState } from "react";

interface FormValue {
    displayName: string,
    email: string,
    password: string
}

const defaultFormFields: FormValue = {
    displayName: '',
    email: '',
    password: ''
}


function SignUpForm() {

    const [formFields, setFormFields] = useState<FormValue>(defaultFormFields)
    const {displayName, email, password} = formFields


    return <SignUpContainer>
        <h2>Don't have an account</h2>
        <span>Sign up with your email and password</span>
        <form>
            <FormInput
            label="Display Name"
            type="text"
            name="displayName"
            value={displayName}
            required
            />
            <FormInput
            label="Email"
            type="email"
            name="email"
            value={email}
            required
            />
            <FormInput
            label="Password"
            type="password"
            name="password"
            value={password}
            required
            />
       
            <Button type="submit">Sign Up</Button>
        </form>
    </SignUpContainer>
}

export default SignUpForm