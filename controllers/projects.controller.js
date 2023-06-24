/**
 * En este archivo contiene todas las funciones que devuelven la información de los proyectos al front
 * Importo los módulos completos de servicios y de las vistas
*/
import * as service from '../services/projects.services.js'
import * as view from '../views/projects.views.js'

/**
 * Obtiene todos los proyectos y muestra la lista de proyectos en la sección correspondiente.
 * @param {object} req - El objeto de solicitud HTTP.
 * @param {object} res - El objeto de respuesta HTTP.
 * @returns {void}
 */
function getProjects(req, res){
    const section = req.query.section;
    const technologies = req.query.technologies;

    service.getProjects({section, technologies})
        .then(function(projects){
            res.send(view.createProjectsSection(projects, section, technologies));
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
        section: req.body.section
    }

    service.insertOneProject(project)
        .then(function(newProject){
            res.send(view.createPage('Proyecto creado', `<p>Proyecto ${newProject.name} creado con el id ${newProject.id}</p>`))
        })
        .catch(function (error) {
            res.send(view.createPage('Error', `<p>Lo sentimos, no se pudo realizar la carga del nuevo proyecto</p>`))
        })
}

function updateOneProject(req, res) {
    const id = req.params.idProject
    const project = {
        name: req.body.name,
        description: req.body.description,
        link: req.body.link,
        img: req.body.img,
        technologies: req.body.technologies,
        section: req.body.section
    }
    service.updateOneProject(id, project)
        .then(function (project) {
            if (project) {
                res.send(view.createPage('Proyecto Modificado', `<h2>El proyecto #${project.id} ha sido modificado con exito!</h2>`))
            }
            else {
                res.send(view.createPage('No se encontro!', '<h1>Lo sentimos, el proyecto que buscas ya no se encuentra disponible o no existe</h1>'))
            }
        })
}

function deleteOneProject(req, res) {
    const id = req.params.idProject

    service.deleteOneProject(id)
        .then(function (project) {
            if (project) {
                res.send(view.createPage('Proyecto Eliminado', `<h2>El proyecto #${project.id} ha sido eliminado con exito!</h2>`))
            }
            else {
                res.send(view.createPage('No se encontro!', '<h1>Lo sentimos, el proyecto que buscas ya no se encuentra disponible o no existe</h1>'))
            }
        })
}

export {
    getProjects,
    insertOneProject,
    updateOneProject,
    deleteOneProject
}