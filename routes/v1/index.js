const express = require('express');
const router = express.Router();
const productRoutes = require('./products');

// Mount resource routes
router.use('/products', productRoutes);

module.exports = router;
