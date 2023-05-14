import express, { Request, Response } from 'express'
import path from 'path'
import { body } from 'express-validator';



import { Todo } from '../../models/todo'
import { requireAuth } from '../../middlewares/require-auth'
import { validateRequest } from '../../middlewares/validate-request';
import { uploadFile } from '../../middlewares/upload-file';


const router = express.Router()


router.post('/api/todos', requireAuth,
    [
        body('title')
            .not()
            .isEmpty()
            .withMessage('Title required'),
        body('tag')
            .optional()
            .isString()
            .withMessage('Tag must be valid'),
        body('image').optional().custom((value, { req }) => {
            if (req.files.image) {
                const ext = path.extname(req.files.image.name).toLowerCase();
                const isImage = ['.jpg', '.jpeg', '.png', '.gif'].includes(ext);
                if (!isImage) {
                    throw new Error('Must be image file')
                }
            }
            return true;
        })
    ],
    validateRequest,
    uploadFile,
    async (req: Request, res: Response) => {
        console.log(req.body)
        req.body.userId = req.currentUser!.id
        console.log(req.body)
        const todo = Todo.build(req.body)

        await todo.save()
        res.status(201).send(todo)
    })

export { router as createTodoRouter }