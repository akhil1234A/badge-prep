//measure response

//Block a Method 
const express = require('express');
const app = express();

app.use(express.json());

const measureTime = (req,res,next)=>{

  const start = Date.now(); 

  res.on('finish',()=>{
    let sec = Date.now() - start; 
    console.log(`$Method: {req.method}, Url: ${req.url}, Time: ${sec}`);
  })

  next();
}


app.get('/', measureTime, (req,res)=>{
  setTimeout(()=>{
    res.json('hello')
  },5000)
});


app.listen(3000,()=>{
  console.log('server is running')
})