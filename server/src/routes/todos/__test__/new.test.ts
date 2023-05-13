import request from 'supertest'
import { app } from '../../../app'



it('can only be access if the user is signed in', async () => {
    const response = await request(app)
        .post('/api/todos')
        .send({})

    expect(response.status).toEqual(401)
})

it('returns an error if an invalid title provided', async () => {
    const cookie = await signin()

    await request(app)
        .post('/api/todos')
        .set('Cookie', cookie)
        .send({
            title: "",
        })
        .expect(400)

    await request(app)
        .post('/api/todos')
        .set('Cookie', cookie)
        .send({
        })
        .expect(400)
})

it('create todo and upload a image successfully', async () => {

    const cookie = await signin()
    const testFile = './files/thumbnail.jpg';


    const response = await request(app)
        .post('/api/todos')
        .set('Cookie', cookie)
        .field('title', 'Read a book')
        .attach('image', Buffer.from(testFile, 'utf-8'), {

            // add file info accordingly
            filename: 'thumbnail.jpg',
            contentType: 'text/plain',

        })
    expect(response.statusCode).toBe(201);

});



