var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
  isbn:String,
  title:String,
  author:String,
  category:String,
  stock:Number
});
