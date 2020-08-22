const express = require('express');
const cors = require('cors'); 
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false');

requireDir('./src/models');



app.use('/api', require('./src/routes'));

app.listen(3001);

console.log('Servidor rodando ...');