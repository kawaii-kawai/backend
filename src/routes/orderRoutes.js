const express = require('express');
const { createOrder, getOrders, deleteOrder } = require('../controllers/orderController');

const router = express.Router();

router.post('/', createOrder);
router.get('/', getOrders);
router.delete('/:id', deleteOrder);
router.get('/daily-item-counts', orderController.getDailyItemCounts);

module.exports = router;