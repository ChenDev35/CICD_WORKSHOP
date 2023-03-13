const express = require('express');
const port = process.env.port || 3000;
const app = express();
let x = 0;
app.get('/', (req, res) => {
  x += 1;
  res.send(`<h1>Hellow World ${x}</h1>`);
});

app.get('/', (req, res) => {
  console.log('a blank request has arrived');
  res.send('<h1>Hellow World 3</h1>');
});

app.listen(port, () => {
  console.log(`Server is up and running on http://127.0.0.1:${port}`);
});
