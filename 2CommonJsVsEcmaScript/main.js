// const http = require("node:http"); 
// cant use in module


// const hostname = "127.0.0.1";
// const port = 3000;
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/html");
//     res.end("<h1>Hello World\n</h1>");
// });
// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// })



//Named export
// import {a,b,c,d,} from './mymodule.js';
// console.log(a,b,c,d)


// //default export 
// import obj from './mymodule.js';
// console.log(obj)



// //default export can be call with any name
// import kaif from './mymodule.js';
// console.log(kaif)



const a = require('./mymodule2.js');
console.log(a)