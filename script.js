fibonacciGen = num => {
 let arr=[0,1];
 for(let i=0; i<num-2; i++){
  arr.push(arr[i]+arr[i+1]);}
 return (num>2)? arr:num===2?arr:num === 1?[0]:'Please enter valid number '
 }


console.log(fibonacciGen(2));
console.log(fibonacciGen(10));
console.log(fibonacciGen(20));
console.log(fibonacciGen(-5));

fibonacciFinder = num => {
    let fibonacciArray=fibonacciGen(num+1)
    let golden=fibonacciArray[num]/fibonacciArray[num-1];
    return Math.round((Math.pow(golden, num-1)-Math.pow(1-golden, num-1))/Math.sqrt(5));
}
console.log(fibonacciGen(7))        
console.log(fibonacciFinder(7))     //8

console.log(fibonacciGen(35))
console.log(fibonacciFinder(35))   //  5702887



