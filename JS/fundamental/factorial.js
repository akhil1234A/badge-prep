let result = factorial(4);
console.log(result);

//while loop 

// function factorial(n){
//   let fact = 1;
//   while(n>0){
//     fact *= n; 
//     n--;
//   }
//   return fact
// }


//recursive function 
function factorial(n){
  let fact = n==0? 1 : n; 
  if(n==0) return fact; 
  fact *= factorial(n-1);
  return fact; 
}