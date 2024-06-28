const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const foodRoutes = require('./routes/foodRoutes');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGODB_URI, {
    retryWrites: true,
    w: 'majority',
    appName: 'LauraSeixas'
});

app.use(bodyParser.json());
app.use('/api', foodRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

