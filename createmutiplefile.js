const fs   = require('fs');
const path = require('path').join(__dirname,"files");
//create file in loop with data 
/*for(i=0;i<5;i++){
    fs.writeFileSync(path+`/hello ${i}.txt`,"this is test file");
}*/

fs.readdir(path,(err,files)=>{
    // files name  in array format
     files.forEach((items,index) => { // use arrow function in foreach to get elements
         console.log(items); // print file value 
         console.log(index);// print index
     })
});
