const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello Docker!');
});
app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});
app.get('/info', (req, res) => {
  res.json({ app: 'my app', version: '1.0.0' });
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});