//Block a Method 
const express = require('express');
const app = express();

app.use(express.json());

function block(method){
  return (req,res,next)=>{
      if(method === req.method){
        return res.json({message: 'not allowed'});
      }
      next();
    }
  
}

app.use('/register',block('GET'));

app.post('/register',(req,res)=>{
  res.json('only post is allowed');
})




app.listen(3000,()=>{
  console.log('server is running')
})