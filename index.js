//  types of modules
//  1 build in module ======> core module
//  2 custom module = local
//  3 3rd party module 'npm'

const httpServer = require("http");
const fs = require("fs");
const htmlContent = fs.readFileSync("index.html");

let users = [
  { name: "Georgia", age: 33 },
  { name: "Wayne", age: 33 },
  { name: "Della", age: 33 },
  { name: "Elmer", age: 33 },
  { name: "Eugenia", age: 33 },
  { name: "Duane", age: 33 },
  { name: "Adam", age: 33 },
  { name: "Kathryn", age: 33 },
  { name: "Grace", age: 33 },
];

const server = httpServer.createServer(function (req, res) {
  if (req.url == "/" && req.method == "GET") {
    // res.setHeader("Content-Type", "text/html");
    res.end(JSON.stringify(users));
  } else if (req.url == "/about" && req.method == "GET") {
    console.log(htmlContent);
    res.end(htmlContent);
  }
  if (req.url == "/contact" && req.method == "GET") {
    res.end("contact");
  } else if (req.url == "/adduser" && req.method == "POST") {
    req.on("data", function (chunk) {
      users.push(JSON.parse(chunk));
      console.log(JSON.parse(chunk));
      res.end(chunk);
    });
  } else {
    res.end("404");  
  }
});

server.listen(3000, function () {
  console.log("Server is running ........");
});

/*
userName 
password

/add/user/userName=kamel&password=1231234213

GET 
POST
PUT
PATCH 
DELETE

*/
