import request from 'supertest'
import { app } from '../../../app'
import mongoose from 'mongoose'


it('can only be access if the user is signed in', async () => {
    const id = new mongoose.Types.ObjectId().toHexString()
    const response = await request(app)
        .delete(`/api/todos/${id}`)
        .send({})
    expect(response.status).toEqual(401)
})

it('returns a 404 if the todo is not found', async () => {
    const id = new mongoose.Types.ObjectId().toHexString()
    const cookie = await signin()
    await request(app)
        .delete(`/api/courses/${id}`)
        .set('Cookie', cookie)
        .send({})
        .expect(404)

})


it('delete the course provided by valid id', async () => {

    const cookie = await signin()

    const response = await request(app)
        .post('/api/todos')
        .set('Cookie', cookie)
        .send({
            title: "Read a Book",
        }).expect(201)

    await request(app)
        .delete(`/api/todos/${response.body.id}`)
        .set('Cookie', cookie)
        .send()
        .expect(200)
})