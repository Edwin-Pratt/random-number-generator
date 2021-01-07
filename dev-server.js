// Copyright (c) 2021 Edwin Pratt
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT



let http = require("http");
let fs = require("fs").promises;

let server = http.createServer(function(req, res) {
  switch (req.url) {
    case "/":
    case "/index.html":
    case "./index.html":
      fs.readFile(__dirname + "/index.html")
        .then(content => {
          res.setHeader("Content-Type", "text/html");
          res.writeHead(200);
          res.end(content);
        }).catch(error => {
          res.setHeader("Content-Type", "application/json");
          res.writeHead(500);
          res.end(JSON.stringify({ error: "Unknown error" }));
        });
      break;
    case "./index.css":
      fs.readFile(__dirname + "/index.css")
        .then(content => {
          res.setHeader("Content-Type", "text/css");
          res.writeHead(200);
          res.end(content);
        }).catch(error => {
          res.setHeader("Content-Type", "application/json");
          res.writeHead(500);
          res.end(JSON.stringify({ error: "Unknown error" }));
        });
      break;
    case "./index.js":
      fs.readFile(__dirname + "/index.js")
        .then(content => {
          res.setHeader("Content-Type", "text/javascript");
          res.writeHead(200);
          res.end(content);
        }).catch(error => {
          res.setHeader("Content-Type", "application/json");
          res.writeHead(500);
          res.end(JSON.stringify({ error: "Unknown error" }));
        });
      break;
    default:
      res.setHeader("Content-Type", "application/json");
      res.writeHead(404);
      res.end(JSON.stringify({ error: "Page Not Found" }));
      break;
  }
});

server.listen(8080, "localhost", () => console.log("Listening on http://localhost:8080/"));
