//Trouxe do arq. server.js e referenciei lá.
const express = require('express'); 
const app = express();

//Dizendo pro node que meu modulo vai exportar app que guarda o objeto do express
module.exports = app;