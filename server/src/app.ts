// Import Dependencies
import express from 'express'
import cors from 'cors'


// Initialize express
const app = express()


// Middlewares
app.use(express.json())
app.use(cors({
    credentials: true,
}))


export {app}