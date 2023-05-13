import { Request, Response, NextFunction } from "express";
import { UploadedFile } from 'express-fileupload';
import path from 'path'

import { BadRequestError } from '../errors/bad-request-error';

export const uploadFile = (req: Request, res: Response, next: NextFunction) => {

    const image = req.files?.image as UploadedFile
    const file = req.files?.file as UploadedFile

    if (image) {
        const folderPath = path.join(
            __dirname,
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

        req.body.image = image.name

    }

    if (file) {
        const folderPath = path.join(
            __dirname,
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

        req.body.file = file.name
    }

    next()
}