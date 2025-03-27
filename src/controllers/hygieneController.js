const Hygiene = require('../models/Hygiene');

exports.createHygiene = async (req, res) => {
    try {
        const hygiene = new Hygiene(req.body);
        await hygiene.save();
        res.status(201).json(hygiene);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getHygiene = async (req, res) => {
    try {
        const { date, item } = req.query;
        let query = {};

        if (date) {
            const startOfDayUTC = new Date(`${date}T00:00:00.000Z`);
            const endOfDayUTC = new Date(`${date}T23:59:59.999Z`);
            query.createdAt = { $gte: startOfDayUTC, $lte: endOfDayUTC };
        }

        if (item) {
            query.item = { $regex: new RegExp(item, 'i') };
        }

        const records = await Hygiene.find(query).sort({ createdAt: -1 });
        res.json(records);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


exports.deleteHygiene = async (req, res) => {
    try {
        const hygiene = await Hygiene.findById(req.params.id);
        if (!hygiene) {
            return res.status(404).json({ message: 'Hygiene not found' });
        }
        await hygiene.deleteOne();
        res.json({ message: 'Hygiene removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}