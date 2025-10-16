const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderNumber: { type: Number, unique: true },   // 通し番号

    items: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: { type: Number, required: true }
    }],
    total: { type: Number, required: true },
    payment: { type: String, required: true },
    tableNumber: { type: String },

    orderType: { type: String, enum: ['eat-in', 'takeout'], required: true }, // イートイン/テイクアウト区別
    customerCount: { type: Number },

    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', orderSchema);
