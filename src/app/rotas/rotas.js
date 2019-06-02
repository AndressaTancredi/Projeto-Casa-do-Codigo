module.exports = (app) => {
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
    
    //Quero carregar a lista.marko e carregar o valor da lista de array que eu defini - depois uso a marko expression no lista.marko
    app.get('/livros', function(req, resp) {
        resp.marko(
            require('../views/livros/lista/lista.marko'),
            {
                livros: [
                    { 
                        id: 1,
                        titulo: 'Fundamentos do Node'
                    },
                    { 
                        id: 2,
                        titulo: 'Node Avançado'
                    }
                ]
            }
        );
    });
};