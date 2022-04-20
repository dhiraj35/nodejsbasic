/* filter function filter the array elements */

const arr = [1,3,4,5,6,4,8];
let result = arr.filter((items)=>{
    return items===3;
});
console.log(result);