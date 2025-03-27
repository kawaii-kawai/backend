const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
    try {
        const { items, total, payment, tableNumber, createtime } = req.body;
        const order = new Order({ items, total, payment, tableNumber, createtime });
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getOrders = async (req, res) => {
    try {
        const { date } = req.query;
        let query = {};
        if (date) {
            // 日本時間の開始時刻（UTC+9）を作成
            const startOfDayJST = new Date(`${date}T00:00:00.000+09:00`);
            const endOfDayJST = new Date(`${date}T23:59:59.999+09:00`);

            // UTCに変換
            const startOfDayUTC = new Date(startOfDayJST.toUTCString());
            const endOfDayUTC = new Date(endOfDayJST.toUTCString());

            query.createdAt = { $gte: startOfDayUTC, $lte: endOfDayUTC };
        }

        const orders = await Order.find(query).sort({ createdAt: -1 }).populate('items.product');
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        await order.deleteOne();
        res.json({ message: 'Order removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
