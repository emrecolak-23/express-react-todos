// Import Dependencies
import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import cookieSession from 'cookie-session'

// Import Routes
import { signupRouter, signinRouter, currentUserRouter } from './routes/auth/index'


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
app.use(cookieSession({
    signed: false,
    secure: process.env.NODE_ENV === 'production'
}))

// Auth Routes
app.use(signupRouter)
app.use(signinRouter)
app.use(currentUserRouter)


app.all('*',  (req, res, next) => {
    next(new NotFoundError())
})

app.use(errorHandler)

export {app}