/**
 * Este archivo contiene todas las funciones que devuelven la información de los clientes
 * Importo el módulo de servicios de clientes
 */
import * as service from '../../services/clients.services.js'

/**
 * Obtiene los clientes y los devuelve como un json con un estado 200 (caso exitoso).
 * @param {object} req - El objeto de solicitud HTTP.
 * @param {object} res - El objeto de respuesta HTTP.
 * @returns {void}
 */
function getClients(req, res){
    service.getClients()
        .then(function (clients) {
            res.status(200).json(clients);
        })
}

/**
 * Inserto un nuevo cliente en la base de datos.
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 */
function insertOneClient(req, res){
    const client = {
        nombre: req.body.nombre,
        foto: req.body.foto,
        descripcion: req.body.descripcion,
    }
    // Llama al servicio que crea el producto y le devuelve el estado 201 (creado)
    service.insertOneClient(client)
        .then(function(client){
            res.status(201).json(client);
        })
}

/**
 * Obtengo los proyectos de un cliente específico.
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 */
function getClientProjects(req, res){
    const clientId = req.params.idClient;
    service.getClientProjects (clientId)
    .then(function(projects){
        if (projects) {
            res.status(200).json(projects);
        } else {
            res.status(200).json({ clientId: idClient })
        }
    })
}

/** Exporto las funciones */
export {
    getClients,
    insertOneClient,
    getClientProjects
}