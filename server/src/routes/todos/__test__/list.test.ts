import request from 'supertest'
import { app } from '../../../app'

const createTodo = async (title: string, cookie: any) => {
    return request(app)
        .post('/api/todos')
        .set('Cookie', cookie)
        .send({
            title
        })
}

it('can fetch a list of courses', async () => {

    const cookie = await signin()

    await createTodo('Read A Book', cookie)
    await createTodo('Read A Book', cookie)
    await createTodo('Read A Book', cookie)

    const response = await request(app)
        .get('/api/todos')
        .set('Cookie', cookie)
        .send()
        .expect(200)
    expect(response.body.length).toEqual(3)


})