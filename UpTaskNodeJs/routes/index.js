const express = require('express');
const router = express.Router();

//importar el controlador
const proyectosController = require("../controllers/proyectosControllers");

module.exports = function() {
    // ruta para el hombre
    router.get('/', proyectosController.proyectosHome);
    router.get('/nuevo-proyecto', proyectosController.formularioProyecto);
    router.post('/nuevo-proyecto', proyectosController.nuevoProyecto);



    
    router.get('/nosotros', proyectosController.nosotros);

    return router;
}
