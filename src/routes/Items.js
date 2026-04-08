const express = require('express');
const router = express.Router();
const ItemController = require('../controllers/ItemController');

router
    .get('/items', ItemController.getAll)
    .post('/items', ItemController.create)
    .get('/items/:id', ItemController.getById)
    .put('/items/:id', ItemController.update)
    .delete('/items/:id', ItemController.delete)

module.exports = router;