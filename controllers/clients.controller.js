/*
    En este archivo contiene todas las funciones que devuelven a las vistas la información de los clientes
*/

// Importo el modulo de servicios y el de las vistas, ya que ambos son precisos para el correcto funcionamiento de estos controladores
import * as service from '../services/clients.services.js'
import * as view from '../views/clients.views.js'

// Obtengo todos los proyectos
function getClients(req, res){
    // Uso la funcion asincronica que cree en el modulo de servicios
    service.getClients()
        .then(function(clients){
            // Ejecuto la funcion que cree en el modulo de vistas para mostrar la lista de clientes
            res.send(view.createClientsSection(clients))
        }
    )
}

// Funcion para cargar un nuevo cliente
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

export {
    getClients,
    insertOneClient
}