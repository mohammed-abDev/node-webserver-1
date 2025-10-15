//* ******Questions-7********
// //?A
const http = require("http");
const randomNumber = require("./randomNumber.js");

const randomNumServer = http.createServer((req,res) =>{
    let result = randomNumber.random();
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(`<html>
        <body style="font-family: Arial; text-align: center; margin-top: 100px;">
            <h1>Random Number</h1>
            <h2 style="border-bottom: 2px solid red;">${result}</h2>
        </body>
        </html>`);
    console.log(`Random number sent: ${result}`);
});
randomNumServer.listen(1234,(err) =>{
    if(err){
        console.error("Server failed to start:", err);
    }else{
        console.log("Server running at http://localhost:1234");
    }
});
