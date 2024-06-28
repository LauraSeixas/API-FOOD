const express = require('express');
const foodController = require('../controllers/foodController');

const router = express.Router();

router.post('/foods', foodController.postFoods);
router.get('/foods', foodController.listFoods);
router.get('/foods/:id', foodController.getFoods);
router.put('/foods/:id', foodController.updateFoods);
router.delete('/foods/:id', foodController.deleteFoods);

module.exports = router;
