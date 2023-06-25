/**
 * Este archivo maneja todas las rutas de la api que están relacionadas con los clientes.
 * Importo el módulo de express y el modulo del controlador de los clientes de la api
 * @module mongodb
*/
import { Router } from 'express'
import * as controller from '../controllers/clients.api.controllers.js'

/** Creo el objeto para manipular las rutas */
const route = Router()

/**
 * @route GET /clients - @desc Obtiene todos los clientes.
 * @route POST /clients - @desc Crea un cliente.
*/
route.get('/clients', controller.getClients)
route.post('/clients', controller.insertOneClient)
//route.get('/clients/:idClient/projects', controller.getClientProjects)

/** Exporto por defecto el objeto de rutas. */
export default route