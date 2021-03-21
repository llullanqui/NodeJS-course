const Sequelize = require('sequelize');
const db = require('../config/db');
const Slug = require('slug');
const shortid = require('shortid');

const Proyectos = db.define('proyectos', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: Sequelize.STRING,
    url: Sequelize.STRING
}, {
    // Documentación de hooks: https://sequelize.org/v5/manual/hooks.html
    hooks: {
        beforeCreate(proyecto) {
            const url = Slug(proyecto.nombre).toLowerCase();

            proyecto.url = `${url}-${shortid.generate()}`;
        }
    }
});

module.exports = Proyectos;