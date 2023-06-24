/**
 * Este archivo maneja todas las rutas que están relacionadas a la vista de los clientes en el front.
 * Importo el módulo de express y el modulo del controlador de los clientes
 * @module mongodb
*/
import express from 'express'
import * as controller from '../controllers/clients.controller.js'

/** Creo el objeto para manipular las rutas. */
const route = express.Router()

/** @route GET /clients - @desc Obtiene todos los clientes. */
route.get('/clients', controller.getClients)

/** Exporto por defecto el objeto de rutas. */
export default route