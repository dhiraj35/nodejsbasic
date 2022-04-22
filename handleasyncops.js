/* To handle async operation we use promise */
let a = 10;
let b = 0;

let waitingData = new Promise((resolved,reject) => {
    setTimeout(() => {
    resolved(20); // call to resolved 
    },2000);
});

// handle promise 
waitingData.then(data => {
    b=data;
    console.log(a+b);
}).catch(err => console.log(err))