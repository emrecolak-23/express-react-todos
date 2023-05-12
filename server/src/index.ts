import {app} from './app'

const start = () => {

    app.listen(3000, () => {
        console.log(`Server listening on ${3000}`)
    })
}

start()