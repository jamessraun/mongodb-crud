var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/library';
var ObjectId = require('mongodb').ObjectID;



var getAllBooks = (req,res) => {
  MongoClient.connect(url,(err,db)=> {

    let Book = db.collection('books')

    Book.find({}).toArray((err,books) => {
      res.json(books)
      db.close();
    })
  })
}

var createBook = (req,res) => {
  MongoClient.connect(url,(err,db)=> {

    let Book = db.collection('books')

    Book.insertOne(req.body,(err,book) => {
      res.json(req.body)
      db.close();
    })
  })
}


var deleteBook = (req,res) => {
  MongoClient.connect(url,(err,db)=> {

    let Book = db.collection('books')
    Book.deleteOne({_id: ObjectId(req.params.id) },(err, book) => {
        if(err)
          res.json(err)
        else res.json({message:'the book has been Deleted'})

        db.close()
      }
   );
  })
}

var updateBook = (req,res) => {
  MongoClient.connect(url,(err,db)=> {

    let Book = db.collection('books')
    Book.updateOne({_id:ObjectId(req.params.id)},{$set: {title:req.body.title}},(err, r) =>{
      if(err)
        res.json(err)
      else res.json({message:'the book has been Updated'})

      db.close()
    })
  })
}


module.exports = {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook
};
