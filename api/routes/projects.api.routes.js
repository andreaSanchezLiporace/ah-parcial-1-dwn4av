/**
 * Este archivo maneja todas las rutas que están relacionadas con la vista de los proyectos desde la api.
 * Importo el módulo de express y el modulo del controlador de los proyectos de la api
 * @module express
*/
import { Router } from 'express'
import * as controller from '../controllers/projects.api.controllers.js'

/** Creo una instancia del enrutador de Express para manipular las rutas */
const route = Router()

/**
 * @route GET /projects - @desc Obtiene todos los proyectos.
 * @route POST /projects - @desc Crea un nuevo proyecto.
 * @route PUT /projects/:idProject - @desc Reemplaza por completo un proyecto - @param {string} idProject - ID proyecto.
 * @route PATCH /projects/:idProject - @desc Actualiza un dato de un proyecto - @param {string} idProject - ID proyecto.
 * @route DELETE /projects/:idProject - @desc Elimina un proyecto - * @param {string} idProject - ID proyecto.
*/
route.get('/projects', controller.getProjects)
route.post('/projects', controller.insertOneProject)
route.put('/projects/:idProject', controller.replaceOneProject)
route.patch('/projects/:idProject', controller.updateOneProject)
route.delete('/projects/:idProject', controller.deleteOneProject)

/** Exporto por defecto el objeto de rutas. */
export default route