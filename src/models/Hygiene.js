const mongoose = require('mongoose');

const hygieneSchema = new mongoose.Schema({
    item: { type: String, required: true }, // 料理名
    type: { type: String, required: true }, // 衛生管理の種類（調理開始, 9090, 冷却開始, 冷却終了, ...）
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Hygiene', hygieneSchema);