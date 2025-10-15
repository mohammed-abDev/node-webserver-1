//* ******Questions-6********
const http = require("http");

//?B
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Request received and processed");
  console.log("Response successfully sent!");
});
//?C
server.listen(1234, (err) => {
    if(err){
        console.error("Server failed to start:", err);
    }else{
        console.log("Server running at http://localhost:1234");
    }
});


