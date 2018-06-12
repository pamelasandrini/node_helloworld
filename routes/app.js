var express = require('express');
var router = express.Router();
var book = require('../models/book.model');


router.get('/', function(req, res){
    res.send('Hello World - Node!');
});

router.get('/books', function(req, res){

    console.log('getting all books');
    //could use paramaters lik name, id or empty object to get everything
    book.find({})
    .exec(function(err, results){
        if(err){
            console.log('error has occured while retrieving books');
            res.send('error has occured');
        } else {
            res.json(results);
        }
    });

});

module.exports = router;