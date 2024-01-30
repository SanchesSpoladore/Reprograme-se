const express = require('express');
const app = express();
const port = 443;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html');
});

app.get('/p1', (req, res) => {
    res.sendFile(__dirname + '/p1.html');
});

app.get('/p2', (req, res) => {
    res.sendFile(__dirname + '/p2.html');
});

app.get('/p3', (req, res) => {
    res.sendFile(__dirname + '/p3.html');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
