import request from 'supertest'
import {app} from '../../../app'

it('return with details about current user', async () => {

    const cookie = await signin()
    const response = await request(app)
                            .get('/api/users/currentuser')
                            .set('Cookie', cookie)
                            .send()
                            .expect(200)
    expect(response.body.email).toEqual('colakkemre@gmail.com')

})


it('return with null if not authenticated', async () => {
    const response = await request(app)
                        .get('/api/users/currentuser')
                        .send()
                        .expect(200)
    expect(response.body).toEqual(null)
})