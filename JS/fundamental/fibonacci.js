let result = fib(4);
console.log(result)

// 0 1 1 2 3 5

function fib(n){
  let a = 0; 
  let b = 1; 
  let c = 0; 
  for(let i=0; i<n; i++){
    c = a+b;
    a=b;
    b=c;
  }
  return c
}