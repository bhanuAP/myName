const http = require('http');
const PORT = 5000;

let requestHandler = function(req,res) {
  console.log(req.url);
  if (req.url == '/getMyName') {
    res.statusCode = 200;
    res.write("Bhanu teja");
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
