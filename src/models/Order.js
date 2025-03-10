const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    items: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: { type: Number, required: true }
    }],
    total: { type: Number, required: true },
    payment: { type: String, required: true },
    tableNumber: { type: String },
    createdAt: { type: Date, default: Date.now },
    createtime: { type: String, required: true },
    hash: { type: String, required: true }
});

module.exports = mongoose.model('Order', orderSchema);
