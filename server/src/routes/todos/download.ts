import express, { Request, Response } from 'express'
import { Todo } from '../../models/todo'
import { requireAuth } from '../../middlewares/require-auth'
import { NotAuthorizedError } from '../../errors/not-authorized-error'
import { NotFoundError } from '../../errors/not-found-error'
import path from 'path'
const router = express.Router()

router.post('/api/todos/download/file', requireAuth, async (req: Request, res: Response) => {
    const { id, file } = req.body

    const todo = await Todo.findById(id)

    if (!todo) {
        throw new NotFoundError()
    }

    if (todo?.userId != req.currentUser!.id) {
        throw new NotAuthorizedError()
    }

    console.log(file)
    const filePath = path.join(__dirname, '..', '..', 'uploads', 'files', file)
    res.download(filePath);
})

export { router as downloadFileRouter }