import express from 'express';
const app = express();
app.get('/', (req, res) =>{
  res.send('Hello World !');
})
app.get('/contact', (req, res) =>{
  res.send('Contact');
})
const server = app.listen(4000, 'localhost', () => {
  console.log(`Express running`);
})
