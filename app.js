require('dotenv').config();

const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const picturesRoutes = require('./routes/pictures');

const app = express();

const ports = process.env.PORT || 8080;

// noinspection JSVoidFunctionReturnValueUsed
mongoose
    .connect('mongodb://localhost:27017/ntiersdb')
    .then(() => {
        app.listen(ports, console.log(`Server running on ${ports}`));
    })
    .catch((err) => console.log(`Error in DB connection`, err));

app.use(bodyParser.json());
app.use(cors());

app.use('/images', express.static(path.join('images')));

app.use('/api/pictures', picturesRoutes);