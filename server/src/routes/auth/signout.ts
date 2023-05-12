import express, {Request, Response} from 'express'

// Create Router
const router = express.Router()

router.get('/api/users/signout', (req: Request, res: Response) => {
    req.session = null
    res.cookie('session', '', {maxAge: 0})

    res.json(null)
})

export {router as signoutRouter}