// import express from 'express'; // Express no soporta esta sintaxis
const express = require('express');
const routes = require('./routes');
const path = require('path');

// Crear una app de express
const app = express();

// De dónde cargar los archivos estáticos
app.use(express.static("public"));

// Habilitar pug -> Pug es un view engine, así como hbs, ejs, y React
app.set("view engine", "pug");
// Añadir la carpeta de las vistas
app.set("views", path.join(__dirname, "./views"))

app.use('/',routes());


app.listen(3000);