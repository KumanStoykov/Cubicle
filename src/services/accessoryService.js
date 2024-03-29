const Accessory = require('../models/Accessory');

async function create(name, description, imageUrl) {
   return Accessory.create({ name, description, imageUrl });
};

async function getAll() {
    return Accessory.find({}).lean();
};

async function getAllWithout(accessoryIds) {
    //Native mongodb
    //  return Accessory.find({_id: {$nin: accessoryIds}}).lean();
    // With query
    return Accessory.find().where('_id').nin(accessoryIds).lean();
}

const accessoryService = {
    create,
    getAll,
    getAllWithout
}

module.exports = accessoryService;