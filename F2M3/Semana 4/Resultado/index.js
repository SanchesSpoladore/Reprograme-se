const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const filmeController = require('./controllers/filmeController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/cadastro.html');
});
app.post('/filme', filmeController.create);
app.get('/filme/:id', filmeController.getById);
app.put('/filme/:id', filmeController.update);
app.delete('/filme/:id', filmeController.delete);
app.get('/filmes', filmeController.getAll);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});