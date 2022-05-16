const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');
const doador = require('./models/doador');

mongoose.connect('sua string de conexão aqui');
  then(() => {
  console.log ("Conexão OK")
  }).catch(() => {
  console.log("Conexão NOK")
  });


app.use (bodyParser.json());

app.post ('/api/doador', (req, res, next) => {
  const Doador = new Doador({
  name: req.body.name,
  endereco: req.body.endereco,
  numeroCasa: req.body.numeroCasa,
  complemento: req.body.complemento,
  phone: req.body.phone,
  informacoes: req.body.informacoes,
  complemento: req.body.complemento,
  complemento: req.body.complemento,
  observacao: req.body.observacao,

  })
  doador.save();
  console.log (doador);
  res.status(201).json({mensagem: 'Doador inserido'})
  });
