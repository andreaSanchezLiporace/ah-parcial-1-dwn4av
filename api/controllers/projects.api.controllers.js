/**
 * Este archivo contiene todas las funciones que devuelven la información de los proyectos con la api
 * Filtros pryectos: se aplican del lado del servidor en el archivo projects.services.js de la carpeta services
 * Importo el módulo completo de servicios de proyectos
*/
import * as service from '../../services/projects.services.js'

/**
 * Obtiene todos los proyectos y los devuelve como un json con un estado 200 (caso exitoso).
 * @param {object} req - El objeto de solicitud HTTP.
 * @param {object} res - El objeto de respuesta HTTP.
 * @returns {void}
 */
function getProjects(req, res){
    const filter = req.query;
    service.getProjects(filter)
        .then(function(projects){
            res.status(200).json(projects);
        })
}

// Funcion para cargar un nuevo proyecto
function insertOneProject(req, res){
    const project = {
        name: req.body.name,
        description: req.body.description,
        link: req.body.link,
        img: req.body.img,
        technologies: req.body.technologies,
        section: req.body.section,
        clientId: req.params.idClient
    }
    // Llama al servicio que crea el producto y le devuelve el estado 201 (creado)
    service.insertOneProject(project)
        .then(function(project){
            res.status(201).json(project)
        })
}

// Función para reemplazar/modificar informacion completa de un proyecto
function replaceOneProject(req, res) {
    // Guardo el id del projecto que viene dado en la url
    const idProject = req.params.idProject
    // Guardo los datos que recibo por el body
    const project = {
        name: req.body.name,
        description: req.body.description,
        link: req.body.link,
        img: req.body.img,
        technologies: req.body.technologies,
        section: req.body.section
    }

    //Llamo al servicio para que haga efectivo el cambio de información en el proyecto y le devuelve el estado 200 (encontrado) o el estado 404 (no encontrado/no existente)
        service.updateOneProject(idProject, project)
            .then(function(project){
                if(project){
                    res.status(200).json(project)
                }
                else {
                    res.status(404).json({error: {mensaje: `Lo sentimos, el proyecto #${idProject} no se encuentra disponible o no existe`}})
                }
            })
    }
    
// Función para actualizar alguno de los datos de un proyecto
function updateOneProject(req, res) {
    // Guardo el id del projecto que viene dado en la url
    const idProject = req.params.idProject
    // Creo un objeto vacio del proyecto y analizo cada propiedad para que solo reemplace la información que se requiere
    const project = {}
        if(req.body.name){
            project.name = req.body.name
        }
        if(req.body.description){
            project.description = req.body.description
        }
        if(req.body.link){
            project.link = req.body.link
        }
        if(req.body.img){
            project.img = req.body.img
        }
        if(req.body.technologies){
            project.technologies = req.body.technologies
        }
        if(req.body.section){
            project.section = req.body.section
        }
        
    // Llamo al servicio para que haga efectivo el cambio de información en el proyecto y le devuelve el estado 200 (encontrado) o el estado 404 (no encontrado/no existente)
        service.updateOneProject(idProject, project)
            .then(function(project){
                if(project){
                    res.status(200).json(project)
                }
                else {
                    res.status(404).json({error: {mensaje: `Lo sentimos, el proyecto #${idProject} no se encuentra disponible o no existe`}})
                }
            })
    }

// Función para eliminar un proyect de la BBDD 
function deleteOneProject(req, res) {
    const idProject = req.params.idProject
    service.deleteOneProject(idProject)
        .then(function (project) {
            if (project) {
                res.status(200).json(project)
            }
            else {
                res.status(404).json({error: {mensaje: `Lo sentimos, el proyecto #${idProject} no se encuentra disponible o no existe`}})
            }
        })
}

export {
    getProjects,
    insertOneProject,
    replaceOneProject,
    updateOneProject,
    deleteOneProject
}