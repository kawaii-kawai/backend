const mongoose = require('mongoose');

const itemStatusSchema = new mongoose.Schema({
    item: { type: String, required: true },
    status: { type: String, required: true }, // 料理の状態（提供中、調理中、提供中止）
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ItemStatus', itemStatusSchema);