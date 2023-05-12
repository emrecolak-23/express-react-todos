import express, { Request, Response } from 'express'
import path from 'path'
import { body } from 'express-validator'

import { Todo } from '../../models/todo'

import { NotFoundError } from '../../errors/not-found-error'
import { NotAuthorizedError } from '../../errors/not-authorized-error'

import { requireAuth } from '../../middlewares/require-auth'
import { validateRequest } from '../../middlewares/validate-request';
import { uploadFile } from '../../middlewares/upload-file'

const router = express.Router()

router.patch('/api/todos/:id',
    requireAuth,
    [
        body('title')
            .optional()
            .isString()
            .withMessage('Title must be valid'),
        body('tag')
            .optional()
            .isString()
            .withMessage('Tag must be valid'),
        body('file').custom((value, { req }) => {
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
    validateRequest, uploadFile, async (req: Request, res: Response) => {
        const { id } = req.params
        const todo = await Todo.findById(id)

        if (!todo) {
            throw new NotFoundError()
        }

        if (todo.userId != req.currentUser!.id) {
            throw new NotAuthorizedError()
        }

        todo.set(req.body)

        await todo.save()

        res.status(200).json(todo)
    })

export { router as updateTodoRouter }