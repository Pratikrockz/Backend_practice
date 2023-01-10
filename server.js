// create a server
const http = require("http");
const fs = require("fs");
const _ = require("lodash");
const lookup = require("mime-types").lookup;

const Server = http.createServer((req, res) => {
  console.log("request has been came from server");
  //   console.log("this is method", req.method);
  //   console.log("this is url", req.url);
  //res.setHeader("content-type", "html");
  //   res.write("<h1>hello :)</h1>");
  //   res.write("<h2>hello :)</h2>");
  //   res.end();
  // let random = _.random();
  // console.log(random);
  let path = "./Views";
  let mime = lookup(path);
  res.writeHead(200, { "content-type": mime });

  switch (req.url) {
    case "/":
      path += "/index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "/about.html";
      res.statusCode = 200;
      break;
    // redirect to another link
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("location", "/about");
      res.end();
      break;
    default:
      path += "/404.html";
      res.statusCode = 404;

      break;
  }
  //fs is the node file system to red local file we have to require it from node
  fs.readFile(path, (err, fileData) => {
    if (err) {
      console.log(err);
    } else {
      res.write(fileData);
      res.end();
    }
  });
});

//to listen server 3 argument:= port,host,callback function
Server.listen(3000, "localhost", () => {
  console.log("server is listening on port 3000");
});
