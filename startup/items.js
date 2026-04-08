const express = require('express');
const itemsRoutes = require('../src/routes/Items');

module.exports = (app) => {
    app.use(express.json());
    app.use('/api', itemsRoutes);
};
