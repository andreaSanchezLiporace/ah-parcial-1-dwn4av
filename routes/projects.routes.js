/**
 * Este archivo maneja todas las rutas que están relacionadas con la vista de los proyectos en el front.
 * Importo el módulo de express y el modulo del controlador de los proyectos para el front.
 * @module express
*/
import express from 'express'
import * as controller from '../controllers/projects.controller.js'

/** Creo una instancia del enrutador de Express para manipular las rutas */
const route = express.Router()

/** @route GET /projects - @desc Obtiene todos los proyectos. */
route.get('/projects', controller.getProjects)

/** Exporto por defecto el objeto de rutas. */
export default route