/*In this file performing crud operation */
const fs=require('fs');
const path=require('path').join(__dirname,"files"); //files dir in file path  
const dirFileName = `${path}/apple.txt`; // append file name in dir 

// create file with data
//fs.writeFileSync(dirFileName,"This is file creation data"); 

// read file data with utf-8 encoding to convert binary to original format
// output in binary format <Buffer 54 68 69 73 20 69 73 20 66 69 6c 65 20 63 72 65 61 74 69 6f 6e 20 64 61 74 61>
// fs.readFile(dirFileName,'utf-8',(err,data) => {
//     console.log(data);
// });

// update in file example 
// fs.appendFile(dirFileName," and this is append part",(err)=>{
//     if(err) console.log("error while append file");
// });

// Rename file from old file 
//fs.renameSync(`${path}/apple.txt`,`${path}/newfile.txt`);

// delete file name 
fs.unlinkSync(`${path}/newfile.txt`);
