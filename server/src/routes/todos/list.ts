import express, {Request, Response} from 'express'
import { Todo } from '../../models/todo'
import { requireAuth } from '../../middlewares/require-auth'

const router = express.Router()

router.get('/api/todos', requireAuth, async (req: Request, res: Response) => {
    const todos = await Todo.find({
        userId: req.currentUser!.id
    })

    res.status(200).json(todos)
})

export {router as listTodosRouter}