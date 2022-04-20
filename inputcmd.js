/* This topic is used for take input from command line
and create and remove file on basic of command input
 */
const fs = require('fs');
const input = process.argv; // take input from cmd

if(input[2]=='add'){
    fs.writeFileSync(input[3],input[4]);
}else if(input[2]=='remove'){
    fs.unlinkSync(input[3]);
}else{
    console.log("Invalid Input");
}