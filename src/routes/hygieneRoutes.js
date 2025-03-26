const express = require('express');
const { createHygiene, getHygiene, deleteHygiene } = require('../controllers/hygieneController');

const router = express.Router();

router.post('/', createHygiene);
router.get('/', getHygiene);
router.delete('/:id', deleteHygiene);

module.exports = router;