import request from 'supertest'
import {app} from '../../../app'

it('return 400 with an invalid email', async () => {
    return request(app)
            .post('/api/users/signup')
            .send({
                displayName: 'colakkemre',
                email: 'colakkemre',
                password: 'pass123'
            }).expect(400)
})

it('return 400 with an invalid password', async () => {
    return request(app)
            .post('/api/users/signup')
            .send({
                displayName: 'colakkemre',
                email: 'colakkemre@gmail.com',
                password: ''
            }).expect(400)
})

it('return 400 with missing email and password', async () => {
    await request(app)
        .post('/api/users/signup')
        .send({
            displayName: 'colakkemre',
            email: 'colakkemre@gmail.com'
        }).expect(400)

    await request(app)
            .post('/api/users/signup')
            .send({
                password: 'pass123'
            }).expect(400)
})

it('return 201 on successful signup', async () => {
    return request(app)
            .post('/api/users/signup')
            .send({
                displayName: 'colakkemre',
                email: 'colakkemre@gmail.com',
                password: 'pass123'
            }).expect(201)
})

it('not allow duplicate email', async () => {
    const userInput = {
        displayName: 'colakkemre',
        email: 'colakkemre@gmail.com',
        password: 'pass123'
    }

    await request(app)
            .post('/api/users/signup')
            .send(userInput).expect(201)

    await request(app)
            .post('/api/users/signup')
            .send(userInput).expect(400)
})  

it('sets a cookie after successful signup', async () => {
    const response = await request(app)
                            .post('/api/users/signup')
                            .send({
                                displayName: 'colakkemre',
                                email: 'colakkemre@gmail.com',
                                password: 'pass123' 
                            }).expect(201)

    expect(response.get('Set-Cookie')).toBeDefined()
})


