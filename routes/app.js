var express = require('express');
var router = express.Router();
var Book = require('../models/book.model');


router.get('/', function(req, res){
    res.send('Hello World - Node!');
});

router.get('/books', function(req, res){

    console.log('getting all books');
    //could use paramaters like name, id or empty object to get everything
    Book.find({})
    .exec(function(err, results){
        if(err){
            console.log('error has occured while retrieving books');
            res.send('error has occured');
        } else {
            res.json(results);
        }
    });

});

router.get('/books/:id', function(req, res) {
    var id = req.params.id;
    
    console.log('getting one book by id ' + id);
    Book.findOne({
      _id: id
      })
      .exec(function(err, result) {
        if(err) {
          res.send('error occured')
        } else {
          console.log(result);
          res.json(result);
        }
      });
  });

  //one method to do post
router.post('/book', function(req, res){
    var newBook = new Book();

    newBook.title = req.body.title;
    newBook.author = req.body.author;
    newBook.category = req.body.category;

    newBook.save(function(err, result){
        if(err){
            console.log('error occured while saving book');
        }else{
            console.log(result);
            res.send(result);
        }
    })
})

//another way to do post
router.post('/book2', function(req, res){
    Book.create(req.body, function(err, result){
        if(err){
            console.log('error occured while saving book');
        }else{
            console.log(result);
            res.send(result);            
        }
    })
});

module.exports = router;