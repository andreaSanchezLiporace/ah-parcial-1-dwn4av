/**
 * Este archivo contiene todas las funciones que devuelven la información de los clientes al front
 * Importo los módulos completos de servicios y de las vistas
*/
import * as service from '../services/clients.services.js'
import * as view from '../views/clients.views.js'

/**
 * Obtiene todos los clientes.
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP para enviar la respuesta al cliente.
 */
function getClients(req, res){
    // Uso la funcion asincronica que cree en el modulo de servicios
    service.getClients()
        .then(function(clients){
            // Ejecuto la funcion que cree en el modulo de vistas para mostrar la lista de clientes
            res.send(view.createClientsSection(clients))
        }
    )
}

/**
 * Inserto un nuevo cliente en la coleccion de clientes.
 * @param {Object} req - Objeto de solicitud HTTP con los datos del cliente en el cuerpo.
 * @param {Object} res - Objeto de respuesta HTTP para enviar la respuesta al cliente.
 */
function insertOneClient(req, res){
    const client = {
        nombre: req.body.nombre,
        foto: req.body.foto,
        descripcion: req.body.descripcion,
    }

    service.insertOneClient(client)
        .then(function(newClient){
            res.send(view.createPage('Proyecto creado', `<p>Proyecto ${newClient.nombre} creado con el id ${newClient.id}</p>`))
        })
        .catch(function (error) {
            res.send(view.createPage('Error', `<p>Lo sentimos, no se pudo realizar la carga del nuevo proyecto</p>`))
        })
}

/** Exporto las funciones */
export {
    getClients,
    insertOneClient
}