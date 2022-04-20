// define normal function
function test(a) {
   return a * 100;
}
// define arrow function 
let test1 = (a) => a * 100;

let test2 = (a) => {
   return a * 100;
}
/* step to make define simple way 
1.    (param1,param2) => {

   }
2. define in variable
 let test = (param1,param2) => {

   }
*/
// pass into function 
console.log(test(2));
console.log(test1(3));
console.log(test2(4));