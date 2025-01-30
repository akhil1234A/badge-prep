const express = require('express');

const app = express();

app.use((req,res,next)=>{
  console.log(`${req.url}, ${req.method}`);
  next();
})

app.get('/home',(req,res)=>{
  res.end('Home Page');
})

app.get('/about',(req,res)=>{
  res.end('About page')
})

app.get('/add/:a/:b',(req,res)=>{
 console.log(req.query);
 console.log(req.params);
})

app.listen(3000,()=>{
  console.log('server is running')
})