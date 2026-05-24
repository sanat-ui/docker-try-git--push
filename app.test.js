const request = require('supertest');
const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.get('/info', (req, res) => res.json({ app: 'my app', version: '1.0.0' }));

describe('API Routes', () => {
  test('GET / returns Hello Docker!', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello Docker!');
  });

  test('GET /health returns status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });

  test('GET /info returns app info', async () => {
    const res = await request(app).get('/info');
    expect(res.statusCode).toBe(200);
    expect(res.body.app).toBe('my app');
  });
});
