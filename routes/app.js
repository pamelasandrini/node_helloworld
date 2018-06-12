var express = require('express');
var router = express.Router();
var book = require('../models/book.model');


router.get('/', function(req, res){
    res.send('Hello World - Node!');
});

module.exports = router;