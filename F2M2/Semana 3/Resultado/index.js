const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/upload', upload.single('file'), (req, res) => {
  res.send('Arquivo enviado com sucesso!');
});

app.get('/listar', (req, res) => {
  const uploadPath = path.join(__dirname, 'uploads');

  fs.readdir(uploadPath, (err, files) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erro ao listar arquivos.');
      return;
    }

    res.json({ files });
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
