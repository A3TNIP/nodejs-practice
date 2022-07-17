const express = require('express');

const router = express.Router();

router.get('/add-product',(req, res, next) => {
    console.log("In another middleware!");
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button</form>')
});

router.post('/product', (req,res,next) => {
    console.log(req.body);              // Prints the JSON Object
    console.log(req.body.title);        // Prints the title property of the JSON Object
    res.redirect('/');
});

module.exports = router;

