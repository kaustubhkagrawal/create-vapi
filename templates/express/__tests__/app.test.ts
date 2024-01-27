import request from 'supertest';
import app from '../src/app';

describe('app', () => {
  test('hello world route', async () => {
    const res = await request(app).get('/');

    expect(res.body.value).toEqual('hello world!');
    expect(res.status).toEqual(200);
  });
});
