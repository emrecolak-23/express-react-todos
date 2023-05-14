// Import Dependencies
import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import cookieSession from 'cookie-session'
import fileUpload from 'express-fileupload'
import path from 'path'

// Import Routes
import { signupRouter, signinRouter, currentUserRouter, signoutRouter } from './routes/auth/index'
import { createTodoRouter, listTodosRouter, showTodoRouter, deleteTodoRouter, updateTodoRouter, downloadFileRouter } from './routes/todos'

// Import Middlewares
import { errorHandler } from './middlewares/error-handler'
import { currentUser } from './middlewares/current-user'
// Import Error
import { NotFoundError } from './errors/not-found-error'


// Initialize express
const app = express()


// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(fileUpload())
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}))
app.use(cookieSession({
    signed: false,
    secure: process.env.NODE_ENV === 'production'
}))

app.use(currentUser)

// Auth Routes
app.use(signupRouter)
app.use(signinRouter)
app.use(currentUserRouter)
app.use(signoutRouter)

// Todo Routes
app.use(createTodoRouter)
app.use(listTodosRouter)
app.use(showTodoRouter)
app.use(deleteTodoRouter)
app.use(updateTodoRouter)
app.use(downloadFileRouter)

app.use('/thumbnail',
    express.static(path.join(__dirname, "./uploads/thumbnail"))
);

app.all('*', (req, res, next) => {
    next(new NotFoundError())
})

app.use(errorHandler)

export { app }