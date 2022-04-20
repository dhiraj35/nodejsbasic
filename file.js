const fs = require('fs');
fs.writeFileSync("hello.txt","Simple text");

/* There are many way we can define file system */
const fs = require('fs').writeFileSync;
fs("hello.txt","Simple text");