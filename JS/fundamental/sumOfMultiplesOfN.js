let result = sumOfNMultiple(5,3);
console.log(result)

function sumOfNMultiple(a,b){
  let res = 0; 
  for(let i=1; i<=b; i++){
    res += i*a; 
  }
  return res;
}