/*
FizzBuzz Server
Write a server using http and http.createServer. Then using req.url respon if req.url is /1, /2 or any number just respond with the provided number unless it one of the following situations:

/number is a multiple of three then respond fizz
/number is a multiple of five then respond buzz
/number is a multiple of fizzbuzz then respond fizzbuzz.
*/

app.get('/fizzbuzz/:num', (req, res) => {
  const num = req.params.num;
  const number = parseInt(num);
    if(number % 5 === 0 && number % 3 === 0) {
      res.send('FizzBuzz');
    } else if (number % 5 === 0) {
      res.send('Buzz');
    } else if (number % 3 === 0) {
      res.send('Fizz');
    } else {
      // above we parseInt() in order to do the math but
      // we need to .toString() in order to return the number
      res.send(number.toString());
    }
});

app.use((req, res) => {
  res.status(404);
  res.send('OOPS: WE CANNOT FIND THAT');
});

app.listen(8000, () => {
  console.log('Listening', 8000);
  console.log('http://localhost:8000/fizzbuzz');
});
Add Comment Collapse
