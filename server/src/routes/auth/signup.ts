import express, {Request, Response} from 'express'

import { User } from '../../models/user'
import { BadRequestError } from '../../errors/bad-request-error'

// Create Router
const router = express.Router()


router.post('/api/users/signup', async (req: Request, res: Response) => {
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