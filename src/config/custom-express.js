const express = require('express'); 
const app = express();

//Declarar a importação do módulo de rotas
const rotas = require('../app/rotas/rotas')
rotas(app);

module.exports = app;


