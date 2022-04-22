console.log("first console");

// set timeout in async
setTimeout(()=>{
console.log("second running ");
},2000);

console.log("Third Console");
/* output 
first console
Third Console
second running 
*/

// drawback of Async language 

let a =10;
let b=0;

setTimeout(() =>{
b=20
},200)

console.log(a+b);
/*expected output is:30
Actual output is 10 
*/