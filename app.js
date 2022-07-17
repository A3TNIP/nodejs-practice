const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/',(req,res,next) => {
    console.log("This always runs");
    next();
});

app.use('/add-product',(req, res, next) => {
    console.log("In another middleware!");
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button</form>')
});

app.post('/product', (req,res,next) => {
    console.log(req.body);              // Prints the JSON Object
    console.log(req.body.title);        // Prints the title property of the JSON Object
    res.redirect('/');
});


app.use('/',(req, res, next) => {
    console.log("In another middleware!");
    res.send('<h1>Hello from express</h1>')
});

app.listen(3000);