const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/ItemsController');

router
    .get('/Items', itemsController.getAll)
    .post('/Item', itemsController.create)
    .get('/Item/:id', itemsController.getById)
    .put('/Item/:id', itemsController.update)
    .delete('/Item/:id', itemsController.delete)

module.exports = router;