const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Express Demo App</h1> <h4>Message: Success</h4> <p>Version 1.1</p>');
})

app.get('/products', (req, res) => {
  res.send([
    {
      productId: '101',
      price: 2000
    },
    {
      productId: '1021',
      price: 2500000
    }
  ])
})

app.get('/test', (req, res) => {
  res.send('App is running in /test Route')
})


app.listen(port, ()=> {
  console.log(`Demo app is up and listening to port: ${port}`);
})
 
