const express = require('express'); //Requires the express NPM module

const http = require('http');

const app = express(); //Creates an express server

// YOUR APPS HOME PAGE

app.get('/', (req, res) => res.send('Welcome!'));

// Exercise add two routes
// Add a route for '/about'
// Add a route for '/contact'

app.use((req, res) => {
  console.log('WOOPS');
  next();
});

app.get('/about', (req,res) => res.send('We are cool!')
);

app.get('/contact', (req, res) =>
  res.send('Please visit us in person')
);

// A Catch all routes

app.use((req,res) => {
  res.status(404);
  res.send('OOPS: WE CANNOT FIND THAT');
});


app.listen(8000, () => {
  console.log('LISTENING', 8000);
}); // Tells the server to listen on PORT 8000
