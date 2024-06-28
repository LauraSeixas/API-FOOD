const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    quantity: { type: Number, required: true, min: [0, 'A quantidade não pode ser negativa'] },
    expirationDate: { type: Date, required: true },
    price: { type: Number, required: true, min: [0, 'O preço não pode ser negativo'] },
});

foodSchema.pre('save', async function(next) {

    if (this.expirationDate < Date.now()) {
        return next(new Error('A data de expiração não pode já ter passado'));
    }
    next();
});

const Food = mongoose.model('Food', foodSchema);
module.exports = Food;
