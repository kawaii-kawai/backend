const mongoose = require('mongoose');

const hygieneSchema = new mongoose.Schema({
    rotation: { type: Number, required: true }, // 何回目の衛生管理か
    item: { type: String, required: true }, // 料理名
    type: { type: String, required: true }, // 衛生管理の種類（調理開始, 9090, 冷却開始, 冷却終了, ...）
    createdAt: { type: Date, default: Date.now },
});

hygieneSchema.index({ rotation: 1, item: 1 });
hygieneSchema.index({ rotation: 1, type: 1 });

module.exports = mongoose.model('Hygiene', hygieneSchema);