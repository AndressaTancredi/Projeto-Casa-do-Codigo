//Módulo Node é uma biblioteca, um conjunto de funcionalidades. Um arquivo .js é um módulo.

// Como importar um módulo do próprio Node:
const http = require('http');

//Executar o método createServer para criar o servidor. Que vai retornar um server.
const servidor = http.createServer(function (req, resp) { //O que ele vai fazer quando receber a requisição que no caso o conteúdo para o cliente:
    resp.end(` 
    <html>
        <head>
            <meta charset="utf-8">
        </head>
        <body>
            <h1> Casa do Código </h1>
        </body> 
    /html>`
    );
});

//Qual vai ser a porta que meu servidor vai funcionar:
servidor.listen(3000); // Servidor escute a porta 3000.





