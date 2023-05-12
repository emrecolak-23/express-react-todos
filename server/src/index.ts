// Import Dependencies
import * as dotenv from 'dotenv'
dotenv.config()

import {app} from './app'

const start = () => {

    if(!process.env.API_PORT) {
        console.log('API_PORT must be defined')
    }

    const PORT = process.env.API_PORT

    app.listen(PORT, () => {
        console.log(`Server listening on ${PORT}`)
    })
}

start()