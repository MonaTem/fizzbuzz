'use strict';

var path = require('path');

var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

app.get('/:num', function(req, res) {

    var nbr = parseInt(req.params.num);

    var numStr = nbr.toString();

    if ((nbr % 3 === 0) && (nbr % 5 === 0)) {
    //  console.log(nbr);
      res.send("Fizzbuzz");
    } else if (nbr % 3 === 0 ){
      res.send("Fizz");
    } else if (nbr % 5 === 0){
      res.send("Buzz");
    } else {
      res.send(numStr);
  }

    });

app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
