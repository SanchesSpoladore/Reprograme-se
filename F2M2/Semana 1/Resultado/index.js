const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('pagina.html', (err, data) => {
        if (err) {
            res.writeHead(404);
            res.write('Erro: Arquivo não encontrado');
        } else {
            res.write(data);
        }
        res.end();
    });

    fs.readFile('texte.txt', 'utf8', (err, data) => {
        if (err) {
            console.log('Erro: Arquivo não encontrado');
        } else {
            console.log(data);
        }
    });
});

server.listen(3000, () => {
    console.log('Servidor está rodando na porta 3000');
});