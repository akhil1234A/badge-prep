const fs = require('fs');

//Write, Read Sync

fs.writeFileSync('sample.text','This is a sample file reading exercise');
const data = fs.readFileSync('sample.text','utf-8');

console.log(data);

//Write, Read Async

fs.writeFile('s','hi',(err)=>{
  if (err) throw err;
  console.log('success');
})

fs.readFile('s','utf-8',(err,data)=>{
  if(err) throw err; 
  console.log(data);
})

//Current Date and Time

const date = new Date().toString();

fs.writeFile('s',date,(err)=>{
  if(err) throw err;
})