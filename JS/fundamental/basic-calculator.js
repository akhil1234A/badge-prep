
function sum(){
  let sum = 0; 
  for(let i=0; i<arguments.length; i++){
    sum+=arguments[i];
  }
  console.log(sum);
}

function multiply(){
  let multiply = 1; 
  for(let i=0; i<arguments.length; i++){
    multiply*=arguments[i];
  }
  console.log(multiply);
}

function substract(){
  let sub = arguments[0];
  for(let i=1; i<arguments.length; i++){
    sub-=arguments[i];
  }
  console.log(sub);
}

function division(a,b){
  let div = 0; 
  div = parseInt(a/b);
  console.log(div); 
}

sum(1,2,3,4);
multiply(1,2,3,4);
substract(5,2);
division(10,2)