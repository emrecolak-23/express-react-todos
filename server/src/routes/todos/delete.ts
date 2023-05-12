import express, {Request, Response} from 'express'
import { Todo } from '../../models/todo'

import { NotFoundError } from '../../errors/not-found-error'
import { requireAuth } from '../../middlewares/require-auth'
import { NotAuthorizedError } from '../../errors/not-authorized-error'

const router = express.Router()

router.delete('/api/todos/:id', requireAuth, async (req:Request, res: Response) => {
    const {id} = req.params
    const todo = await Todo.findById(id)

    if(!todo) {
        throw new NotFoundError()
    }

    if(todo.userId != req.currentUser!.id) {
        throw new NotAuthorizedError()
    }

    await todo.deleteOne()

    res.status(200).send(todo)

})

export {router as deleteTodoRouter}