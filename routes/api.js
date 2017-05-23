var express = require('express');
var router = express.Router()
var controller = require('../controllers/books_controller');

router.get('/books',controller.getAllBooks)
router.post('/books',controller.createBook)
router.put('/books/:id',controller.updateBook)
router.delete('/books/:id',controller.deleteBook)







module.exports = router;
