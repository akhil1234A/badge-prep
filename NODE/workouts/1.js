const fs = require('fs')

let promise = new Promise((res,rej)=>{
   setTimeout(()=>{
    let date = new Date;
    fs.writeFile('date.txt',date.toString(), (err)=>{
      if(err){
        console.log(err);
        rej(err);
      } else {
        res('file written')
      }
    })
   },3000)
})

promise
.then((data)=>{
  console.log(data);
})
.catch((error)=>{
  console.log(error)
})