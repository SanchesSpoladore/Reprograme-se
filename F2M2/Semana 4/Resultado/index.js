const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

const transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "31bb4f3e471527",
    pass: "ea64335a99059c"
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/email', (req, res) => {
  res.sendFile(path.join(__dirname, 'email.html'));
});

app.get('/logado', (req, res) => {
  res.sendFile(path.join(__dirname, 'logado.html'));
});

app.post('/sendemail', (req, res) => {
  const { to_email, subject, message } = req.body;

  const mailOptions = {
    from: 'd25ce1f26d-a56712+1@inbox.mailtrap.io',
    to: to_email,
    subject: subject,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erro ao enviar e-mail:', error);
      res.status(500).send('Erro ao enviar e-mail!');
    } else {
      console.log('E-mail enviado:', info.response);
      res.send('E-mail enviado com sucesso!');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
