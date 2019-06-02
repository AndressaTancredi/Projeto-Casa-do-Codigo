//Adicionando dois requires um para o node e outro para trabalhar com o express:
require('marko/node-require').install();
require('marko/express');

const express = require('express'); 
const app = express();

//Declarar a importação do módulo de rotas
const rotas = require('../app/rotas/rotas')
rotas(app);

module.exports = app;


