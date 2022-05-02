const express = require('express');
app = express();
port = 3000;

app.get('/', (req, res) => {
    // console.log(req);
    res.send('<h1>Hello World!</h1>')
  })

app.get('/contact', (req, res) => {
    res.send('<h1>contact me at fan@gmail.com</h1>');
})

app.get('/about', (req, res) => {
    res.send('<h1>I am Fan Yu.</h1>');
})

app.get('/hobbies', (req, res) => {
    res.send('<h1>myhobby is reading</h1>');
})

app.listen(port, function() {
    console.log(`server started at port ${port}`);
});