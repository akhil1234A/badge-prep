const express = require('express');
const app = express();

app.use(express.json());


function logger(req,res,next){
  
  console.log('queries: ',Object.keys(req.query).length > 0 ? Object.keys(req.query) : 'none');
  console.log('params: ', Object.keys(req.params).length>0 ? Object.keys(req.params) : 'none');

  next();
}

app.get('/order/:id/:product', logger, (req,res)=>{
  res.status(200).json({
    message: 'success',
    params: req.params,
    query: req.query
  })
})


app.listen(3000,()=>{
  console.log('server is running');
})