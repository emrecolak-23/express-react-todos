import request from 'supertest'
import {app} from '../../../app'

const userSignupInput = {
    displayName: 'colakkemre',
    email: 'colakkemre@gmail.com',
    password: 'pass123'
}

it('fails when a email that does not exist is entered', async () => {
    await request(app)
            .post('/api/users/signin')
            .send({
                email: 'colakkemre@gmail.com',
                password: 'pass123'
            }).expect(400)
})

it('fails when incorrect password entered', async () => {
    await request(app)
            .post('/api/users/signup')
            .send(userSignupInput).expect(201)

    await request(app)
            .post('/api/users/signin')
            .send({
                email: 'colakkemre@gmail.com',
                password: 'pass1234'
            }).expect(400)
})

it('respond with a cookie when given valid credentials', async () => {
    await request(app)
            .post('/api/users/signup')
            .send(userSignupInput)
            .expect(201)

    const response = await request(app)
                            .post('/api/users/signin')
                            .send({
                                email: 'colakkemre@gmail.com',
                                password: 'pass123'
                            })

    expect(response.get('Set-Cookie')).toBeDefined()
})