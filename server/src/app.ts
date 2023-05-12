// Import Dependencies
import express from 'express'
import 'express-async-errors'
import cors from 'cors'

// Import Routes
import { signupRouter } from './routes/auth/index'


// Import Middlewares
import { errorHandler } from './middlewares/error-handler'

// Import Error
import { NotFoundError } from './errors/not-found-error'

// Initialize express
const app = express()


// Middlewares
app.use(express.json())
app.use(cors({
    credentials: true,
}))

// Auth Routes
app.use(signupRouter)


app.all('*',  (req, res, next) => {
    next(new NotFoundError())
})

app.use(errorHandler)

export {app}