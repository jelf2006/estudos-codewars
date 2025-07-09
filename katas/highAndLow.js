/*In this little assignment you are given a string of space separated numbers, and have to
return the highest and lowest number.*/

// resolution 1:
function highAndLow(n){
  let x = n.split(" ").map(x => Number(x))//change the n to an array of numbers
  let b = x[0];
  let a = x[0];
  for(let i = x.length - 1; i>0; --i){ /*it equal the number of times the loop is executed and
     the number of elements in x*/
    (b<x[i])?b = x[i] : b;//check the highter number and change the value of b to this
    (a>x[i])?a = x[i] : a;//check the lowest number and change the value of a to this
  }
  return `${b} ${a}`
}

// resolution 2:

function highAndLow(n){
  let x = n.split(" ").map(x => Number(x));
  return `${Math.max(...x)} ${Math.min(...x)}`
}