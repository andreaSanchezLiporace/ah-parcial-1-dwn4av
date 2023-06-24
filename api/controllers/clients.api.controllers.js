/**
 * Este archivo contiene todas las funciones que devuelven la información de los cliente
 * Importo el módulo de servicios de proyectos
 */
import * as service from '../../services/clients.services.js'

/**
 * Obtiene los clientes y los devuelve como respuesta JSON.
 * @param {object} req - El objeto de solicitud HTTP.
 * @param {object} res - El objeto de respuesta HTTP.
 * @returns {void}
 */
function getClients(req, res){
    service.getClients()
        .then(function (clientes) {
            res.status(200).json(clientes);
        })
}

// Funcion para cargar un nuevo proyecto
function insertOneClient(req, res){
    const cliente = {
        nombre: req.body.nombre,
        foto: req.body.foto,
        descripcion: req.body.descripcion,
    }
    // Llama al servicio que crea el producto y le devuelve el estado 201 (creado)
    service.insertOneClient(cliente)
        .then(function(cliente){
            res.status(201).json(cliente); // Corregir aquí: usar 'cliente' en lugar de 'client'
        })
}

export {
    getClients,
    insertOneClient,
}