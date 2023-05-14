import request from 'supertest'
import { app } from '../../../app'
import mongoose from 'mongoose'

it('can only be access if the user is signed in', async () => {
    const id = new mongoose.Types.ObjectId().toHexString()

    await request(app)
        .get(`/api/todos/${id}`)
        .send()
        .expect(401)
})




it('returns the couse if the course is found', async () => {

    const todo = {
        title: "Read a Book",
    }
    const cookie = await signin()

    const response = await request(app)
        .post('/api/todos')
        .set('Cookie', cookie)
        .send(todo)
        .expect(201)

    const todoResponse = await request(app)
        .get(`/api/todos/${response.body.id}`)
        .set('Cookie', cookie)
        .send()
        .expect(200)

    expect(todoResponse.body.title).toEqual(todo.title)


})