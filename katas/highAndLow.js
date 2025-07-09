/*In this little assignment you are given a string of space separated numbers, and have to
return the highest and lowest number.*/

// resolution 1:
function highAndLow(n){
  let x = n.split(" ").map(x => Number(x))
  let b = x[0];
  let a = x[0];
  for(let i = x.length - 1; i>0; --i){
    (b<x[i])?b = x[i] : b;
    (a>x[i])?a = x[i] : a;
  }
  return `${b} ${a}`
}

// resolution 2:

function highAndLow(n){
  let x = n.split(" ").map(x => Number(x));
  let b = Math.max(...x)
  let a = Math.min(...x)
  return `${b} ${a}`
}