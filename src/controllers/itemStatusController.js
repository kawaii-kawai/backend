const itemStatusController = require('../models/ItemStatus');

exports.createItemStatus = async (req, res) => {
    try {
        const itemStatus = new itemStatusController(req.body);
        await itemStatus.save();
        res.status(201).json(itemStatus);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getItemStatus = async (req, res) => {
    try {
        const itemStatus = await itemStatusController.find();
        res.json(itemStatus);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.findById = async (id) => {
    return await itemStatusController.findById(id);
}

exports.deleteItemStatus = async (req, res) => {
    try {
        const itemStatus = await itemStatusController.findById(req.params.id);
        if (!itemStatus) {
            return res.status(404).json({ message: 'ItemStatus not found' });
        }
        await itemStatus.deleteOne();
        res.json({ message: 'ItemStatus removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.updateItemStatus = async (req, res) => {
    try {
        const itemStatus = await itemStatusController.findById(req.params.id);
        if (!itemStatus) {
            return res.status(404).json({ message: 'ItemStatus not found' });
        }
        Object.assign(itemStatus, req.body);
        await itemStatus.save();
        res.json(itemStatus);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

