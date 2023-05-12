// Import Dependencies
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
dotenv.config()

import {app} from './app'

const start = async () => {

    if(!process.env.API_PORT) {
        console.log('API_PORT must be defined')
        return
    }

    if(!process.env.MONGO_URI) {
        console.log('MONGO_URI must be defined')
        return
    }

    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Connected to MongoDB')

    } catch(err) {
        console.log(err)
    }


    const PORT = process.env.API_PORT

    app.listen(PORT, () => {
        console.log(`Server listening on ${PORT}`)
    })
}

start()