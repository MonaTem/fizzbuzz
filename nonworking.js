
const http = require('http');
const port = 8000;
var number = 0;

const server = http.createServer(function (res, req){

   var fizzNum = "";
   req.url =  fizzNum;
   number = fizzNum[1];
//   console.log(number);
   //fizzNum = "'/' + ' ' + number";

   if (number % 3 === 0 && number % 5 === 0) {
     res.end("Fizzbuzz");
   } else if (number % 3 === 0 ){
     res.end("Fizz");
   } else if (number % 5 === 0){
     res.end("Buzz");
   } else {
     res.end(number);
   }

});

server.listen(port, function() {
  console.log('Listening', number);

});
