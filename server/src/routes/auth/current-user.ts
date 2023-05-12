import express, {Request, Response} from 'express'
import { currentUser } from '../../middlewares/current-user'

// Create Router
const router = express.Router()

router.get('/api/users/currentuser', currentUser, (req: Request, res: Response) => {
    res.json(req.currentUser || null)
})

export {router as currentUserRouter}