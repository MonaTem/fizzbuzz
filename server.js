/*
  Our http parsing and server module

  Built into NodeJS!!  Express not used in this example
*/
const http = require('http');

const PORT = 8000;

var number = 0;

const server = http.createServer(handler); // creates a server that takes a callback

server.listen(PORT, function () {
  console.log('LISTENING on ', PORT);
});

function handler(req, res) {

  var fizzStr = "";
  fizzStr = req.url;
  var num = parseInt(fizzStr.slice(1, fizzStr.length));
  var numStr = num.toString();

  if ((num % 3 === 0) && (num % 5 === 0)) {
    console.log(num);
    res.end("Fizzbuzz");
  } else if (num % 3 === 0 ){
    res.end("Fizz");
  } else if (num % 5 === 0){
    res.end("Buzz");
  } else if (isNaN(num)) {
    res.end("Hello");
  } else {
    res.end(numStr);

}
}
