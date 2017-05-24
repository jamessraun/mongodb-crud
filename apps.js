var express = require('express');
var bodyParser = require('body-parser')
var MongoClient = require('mongodb').MongoClient;
var api = require('./routes/api');

var app = express();
var url = 'mongodb://localhost/library';


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use('/api',api);


app.listen(3000)
