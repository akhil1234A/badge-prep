console.log('hello');

process.nextTick(()=>{
  console.log('hello s');
})

console.log('b')

