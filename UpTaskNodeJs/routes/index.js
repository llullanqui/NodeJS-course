const express = require('express');
const router = express.Router();

// importar el express validator
const { body } = require('express-validator');

//importar el controlador
const proyectosController = require("../controllers/proyectosControllers");

module.exports = function() {
    // ruta para el hombre
    router.get('/', proyectosController.proyectosHome);
    router.get('/nuevo-proyecto', proyectosController.formularioProyecto);
    router.get('/nosotros', proyectosController.nosotros);
    
    // Documentación validator: https://express-validator.github.io/docs/index.html
    router.post('/nuevo-proyecto', 
        body('nombre').not().isEmpty().trim().escape(), 
        proyectosController.nuevoProyecto);
    return router;
}
