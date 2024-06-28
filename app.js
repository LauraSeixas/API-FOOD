const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const foodRoutes = require('./routes/foodRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect('mongodb+srv://LauraLacerda:I0oPJySYllNB2BFv@lauraseixas.ka3ryrj.mongodb.net', {
    retryWrites: true,
    w: 'majority',
    appName: 'LauraSeixas'
});

app.use(bodyParser.json());
app.use('/api', foodRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

