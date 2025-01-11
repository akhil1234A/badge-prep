//Middleware to validate 

const express = require('express');
const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
  res.send('hello');
})

function validate(fields){
  return (req,res,next)=>{
    const required = fields.filter(field => !(field in req.body));
    if(required.length>0){
      return res.status(400).json("missing field");
    }
    next();
  }
}

app.post('/register',validate(['name','age']),(req,res)=>{
  const {name, age} = req.body;
  console.log(name,age);
  res.status(200).json({
    message: 'success'
  })
})


app.listen(3000,()=>{
  console.log('server is running');
})