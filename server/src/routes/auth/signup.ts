import express, {Request, Response} from 'express'

import { User } from '../../models/user'
import { BadRequestError } from '../../errors/bad-request-error'
import { body } from 'express-validator'

import { validateRequest } from '../../middlewares/validate-request'

// Create Router
const router = express.Router()


router.post('/api/users/signup', 
    [
        body('displayName')
            .not()
            .isEmpty()
            .withMessage('Displayname must be valid'),
        body('email')
            .isEmail()
            .withMessage('Email must be valid'),
        body('password')
            .trim()
            .isLength({min: 4, max: 20})        
    ],
    validateRequest,
async (req: Request, res: Response) => {
    const {displayName, email, password} = req.body

    const existingUser = await User.findOne({email})

    if(existingUser) {
        throw new BadRequestError('Email in use')
    }

    const user = User.build({displayName, email, password})
    await user.save()

    res.status(201).json(user)
})


export { router as signupRouter }