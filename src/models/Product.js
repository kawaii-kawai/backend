const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    rotation: { type: Number, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
})

module.exports = mongoose.model('Product', productSchema);