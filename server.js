const http = require('http');
const PORT = 8000;

let requestHandler = function(req,res) {
  console.log(req.url);
  if(req.url == '/') {
    req.url = '/getMyName';
  }
  if (req.url == '/getMyName') {
    res.statusCode = 200;
    res.send("Bhanu teja");
    res.end();
  } else {
    res.statusCode = 404;
    res.write(`${req.url} file not found`);
    res.end();
  }
}


const server = http.createServer(requestHandler);
server.listen(PORT);
console.log(`listening at ${PORT}`);
