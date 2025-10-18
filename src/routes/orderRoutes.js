const express = require('express');
const { createOrder, getOrders, deleteOrder, getDailyItemCounts } = require('../controllers/orderController');

const router = express.Router();

router.post('/', createOrder);
router.get('/', getOrders);
router.delete('/:id', deleteOrder);
router.get('/daily-item-counts', getDailyItemCounts);

module.exports = router;