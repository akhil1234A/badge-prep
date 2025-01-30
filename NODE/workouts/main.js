const http = require('http');

const server = http.createServer((req,res)=>{
  res.statusCode = 200;
  res.setHeader('Content-Type','text/plain');
  

 if(req.method==='GET' && req.url==='/'){
  res.statusCode = 200;
  res.end('ello');
 } else if(req.method ==='GET' && req.url=='/home'){
  res.statusCode = 200;
  res.end('Home Page');
 } else {
  res.statusCode = 400; 
  res.end('Page not found');
 }


})

server.listen(3000,()=>{
  console.log('server is running')
})

