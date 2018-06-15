var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Book = require('./models/book.model');
var appRoutes = require('./routes/app');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

var db = 'mongodb://localhost/node-helloworld';
mongoose.connect(db);

var port = 3200;

app.listen(port, function() {
    console.log('Hello World app running. Access http://localhost:' + port);
});

app.use('/', appRoutes);