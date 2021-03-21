// import express from 'express'; // Express no soporta esta sintaxis
const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');

// Crear la conexión a la Base de datos
const db = require('./config/db');

// Importar el modelo
require('./models/Proyectos');

db.sync()
    .then(() => console.log('Conectado al Servidor'))
    .catch(error => console.log(error));

// Crear una app de express
const app = express();

// De dónde cargar los archivos estáticos
app.use(express.static("public"));

// Habilitar pug -> Pug es un view engine, así como hbs, ejs, y React
app.set("view engine", "pug");

// Añadir la carpeta de las vistas
app.set("views", path.join(__dirname, "./views"))

// Habilitar body parser para leer datos del formulario
app.use(bodyParser.urlencoded({extended: true}))

app.use('/',routes());


app.listen(3000);