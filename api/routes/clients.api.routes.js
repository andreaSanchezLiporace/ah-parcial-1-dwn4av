/**
 * Este archivo maneja todas las rutas de la api que están relacionadas con los clientes.
 * Importo el módulo de express, el módulo del controlador de los clientes de la api y el módulo del controlador los projectos
 * @module router
*/
import { Router } from 'express'
import * as controller from '../controllers/clients.api.controllers.js'
import * as controller from '../controllers/projects.api.controllers.js'

/** Creo el objeto para manipular las rutas */
const route = Router()

/**
 * @route GET /clients - @desc Obtiene todos los clientes.
 * @route POST /clients - @desc Crea un cliente.
 * @route GET /clients/:idClient/projects - @desc Obtiene todos los proyectos por cliente.
 * @route POST /clients/:idClient/projects - @desc Crea un proyecto con la referencia al cliente.
*/
route.get('/clients', controller.getClients)
route.post('/clients', controller.insertOneClient)
route.get('/clients/:idClient/projects', controller.getClientsProjects)
route.post('/clients/:idClient/projects', controller.insertOneProject)

/** Exporto por defecto el objeto de rutas. */
export default route