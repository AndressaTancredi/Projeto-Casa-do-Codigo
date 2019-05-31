//Vamos acessar o pacote express e
const express = require('express'); //Vai retornar uma função
const app = express(); //Chamando a função

//Vai ser executado quando meu servidor for iniciado.
app.listen(3000, function(){
    console.log('Servidor Rodando na porta 3000');
    
});
//Primeiro parametro qual a rota e segundo que resposta quero
app.get('/', function(req,resp) {
    resp.send( 
        `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1> Casa do Código </h1>
                </body> 
            </html>
        ` 
    );
});

app.get('/livros', function(req,resp) {
    resp.send( 
        `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1> Listagem de Livros </h1>
                </body> 
            </html>
        ` 
    );
});

/* const http = require('http');

const servidor = http.createServer(function (req, resp) { 
    let html = "";

    if (req.url =='/'){ 
        html = ` 
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Casa do Código </h1>
            </body> 
        </html>`
        ;
    } else if (req.url == '/livros'){
        html = ` 
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Listagem de Livros </h1>
            </body> 
        </html>`
        ;
    }
    // Outros else if...
    resp.end(html);
});
servidor.listen(3000); */