module.exports = app => {
    const products = require('../controller/product.controller');

    var router = require('express').Router();

    router.get('/', products.findAll);
    router.get('/:id', products.findOne);

    app.use('/api/products', router);
}