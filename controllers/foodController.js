const foodService = require('../services/foodService');

exports.postFoods = async (req, res) => {
    try {
        const food = await foodService.createFood(req.body);
        res.status(201).json(food);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.listFoods = async (req, res) => {
    try {
        const foods = await foodService.getAllFoods();
        res.status(200).json(foods);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getFoods = async (req, res) => {
    try {
        const food = await foodService.getFoodById(req.params.id);
        if (!food) {
            return res.status(404).json({ error: 'Comida não encontrada' });
        }
        res.status(200).json(food);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateFoods = async (req, res) => {
    try {
        const food = await foodService.updateFood(req.params.id, req.body);
        if (!food) {
            return res.status(404).json({ error: 'Comida não encontrada' });
        }
        res.status(200).json(food);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteFoods = async (req, res) => {
    try {
        const food = await foodService.deleteFood(req.params.id);
        if (!food) {
            return res.status(404).json({ error: 'Comida não encontrada' });
        }
        res.status(200).json({ message: 'Comida deletada com sucesso' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
