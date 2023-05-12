import express, {Request, Response} from 'express'

import { Todo, TodoAttrs } from '../../models/todo'
import { requireAuth } from '../../middlewares/require-auth'
import { UploadedFile } from 'express-fileupload';
import { BadRequestError } from '../../errors/bad-request-error';
import { validateRequest } from '../../middlewares/validate-request';
import path from 'path'
import { body } from 'express-validator';


const router = express.Router()

const validateFile = [
    body('file').custom((value, { req }) => {
      if (req.files.image) {
        const ext = path.extname(req.files.image.name).toLowerCase();
        const isImage = ['.jpg', '.jpeg', '.png', '.gif'].includes(ext);
        if(!isImage) {
            throw new Error('Must be image file')
        }
      }
      return true;
    })
];


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
    ],
    validateFile,
    validateRequest,
async (req:Request, res: Response) => {
    const image = req.files!.image as UploadedFile
    const file = req.files!.file as UploadedFile
    const uploads: TodoAttrs = {
        title: req.body.title,
        userId: req.currentUser!.id
    }


    if(image) {
        const folderPath = path.join(
            __dirname,
            '../',
            '../',
            'uploads',
            'thumbnail',
            image.name
          );
        image.mv(folderPath, async (err) => {
            if (err) {
                throw new BadRequestError(err.message);
            }
        })

        uploads.image = image.name

    }
    
    if(file) {
        const folderPath = path.join(
            __dirname,
            '../',
            '../',
            'uploads',
            'files',
            file.name
          );
        file.mv(folderPath, async (err) => {
            if (err) {
                throw new BadRequestError(err.message);
            }
        })

        uploads.file = file.name
    }


    const todo = Todo.build(uploads)

    await todo.save()
    res.status(201).send(todo)
})

export {router as createTodoRouter}