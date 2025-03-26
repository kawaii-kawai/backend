const express = require('express');
const { createItemStatus, getItemStatus, deleteItemStatus, updateItemStatus } = require('../controllers/itemStatusController');

const router = express.Router();

router.post('/', createItemStatus);
router.get('/', getItemStatus);
router.delete('/:id', deleteItemStatus);
router.put('/:id', updateItemStatus);

module.exports = router;