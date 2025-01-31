const express = require('express');
const { createProduct, getProducts, deleteProduct } = require('../controllers/productController');

const router = express.Router();

router.post('/', createProduct);
router.get('/', getProducts);
router.delete('/:id', deleteProduct);

module.exports = router;