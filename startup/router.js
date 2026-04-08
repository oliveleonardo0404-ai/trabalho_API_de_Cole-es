    const express = require('express');
    const personRoutes = require('../src/routes/person');
    const itemsRoutes = require('../src/routes/items');


    module.exports = (app) => {
        app.use(express.json());
        app.use('/api', personRoutes);
        app.use('/items', itemsRoutes);
    };
