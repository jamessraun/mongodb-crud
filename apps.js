var express = require('express');
var bodyParser = require('body-parser')
var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var api = require('./routes/api');

var app = express();

var url = 'mongodb://localhost/library';

MongoClient.connect(url,(err,db)=> {
  console.log("connect correctly to server");

  db.close();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/api',api);


app.listen(3000)
