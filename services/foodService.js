const Food = require('../models/Food');

exports.createFood = async (data) => {
    const food = new Food(data);
    return await food.save();
};

exports.getAllFoods = async () => {
    return await Food.find();
};

exports.getFoodById = async (id) => {
    return await Food.findById(id);
};

exports.updateFood = async (id, data) => {
    return await Food.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};

exports.deleteFood = async (id) => {
    return await Food.findByIdAndDelete(id);
};
