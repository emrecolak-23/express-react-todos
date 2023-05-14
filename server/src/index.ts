// Import Dependencies
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
dotenv.config()

import { app } from './app'

const start = async () => {

    if (!process.env.JWT_KEY) {
        throw new Error('JWT_KEY must be defined')
    }

    if (!process.env.API_PORT) {
        throw new Error('API_PORT must be defined')
    }

    if (!process.env.MONGO_URI) {
        throw new Error('MONGO_URI must be defined')
    }

    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Connected to MongoDB')

    } catch (err) {
        console.log(err)
    }

    const PORT = process.env.API_PORT
    app.listen(PORT, () => {
        console.log(`Server listening on ${PORT}`)
    })
}

start()