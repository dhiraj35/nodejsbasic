const http = require('http');

/* In createServer function we can pass new fuction  
http.createServer((req,res) => {
    res.write("Hi This is test");
    res.end();
}).listen(4500);
 */

function test(req,res){
    res.write("Hi This is test");
    res.end();
}
http.createServer(test).listen(4500);