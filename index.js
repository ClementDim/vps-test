import express from 'express';
const app = express();
app.get('/', (req, res) =>{
  res.send('Hello World !');
})
const server = app.listen(7000, () => {
  console.log(`Express running -> Port: ${server.address().port}`);
})
