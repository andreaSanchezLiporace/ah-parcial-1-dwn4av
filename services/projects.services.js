/**
 * Este archivo contiene todas las funciones que se encargan de interactuar con la coleccion 'Projects' de la BBDD
 * Importo los módulos necesarios:
 * @module mongodb -> para trabajar con la base de datos MongoDB.
 * @module ObjectId -> para trabajar con el dato _id de la colección de proyectos
 */
import { MongoClient, ObjectId } from 'mongodb';

/**
 * @type {MongoClient} -> Cliente de MongoDB para conectar a la base de datos.
 * @type {Db} -> Base de datos a la cual preciso conectar
 */
const client = new MongoClient("mongodb://127.0.0.1:27017");
const db = client.db("AH20231CP1");

/**
 * Obtiene todos los proyectos de la base de datos con ayuda del método find()
 * @param {Object} filter - Filtro para obtener proyectos de acuerdo a la seccion y a la tecnologia usada en su desarrollo
 * @returns {Promise<Array>} - Una promesa que se resuelve con un array de proyectos (a través de toArray()).
*/
async function getProjects(filter={}){
    await client.connect();
    const filterProjects ={};
    if (filter?.section) {
        filterProjects.section = filter.section;
    }
    if (filter?.technologies){
        filterProjects.technologies = {$all: filter.technologies.split(';')}
    }
    return db.collection('Projects').find(filterProjects).toArray()
}

/**
 * Creo un nuevo proyecto en la colección 'Projects' a través del uso del método insertOne.
 * @param {Object} project - Los datos del proyecto a crear.
 * @returns {Promise<Object>} - Promesa que se resuelve con el proyecto creado.
*/
async function insertOneProject(project) {
    await client.connect();
    await db.collection('Projects').insertOne(project);
    return project;
}

/**
 * Edito un proyecto existente en la colección 'Projects' de la base de datos a través del método updateOne con un filtro por _id (que es un dato único) y le paso el proyecto recibido por params con $set
 * @param {string} idProject - El identificador único del proyecto a actualizar.
 * @param {Object} project - Los nuevos datos del proyecto.
 * @returns {Promise<Object>} - Una promesa que se resuelve con el proyecto editado.
*/
async function updateOneProject(idProject, project) {
    await client.connect();
    await db.collection('Projects').updateOne({ _id: new ObjectId(idProject)}, { $set: project });
    return project;
}

/**
 * Reemplazo la información completa de un proyecto en la colección 'Projects' de la base de datos a través del método replaceOne() con un filtro por _id (que es un dato único) y le paso el proyecto completo
 * @param {string} idProject - El identificador único del proyecto a reemplazar.
 * @param {Object} project - Los nuevos datos completos del proyecto.
 * @returns {Promise<Object>} - Una promesa que se resuelve con el proyecto reemplazado.
*/
async function replaceOneProject(idProject, project) {
    await client.connect();
    await db.collection('Projects').replaceOne({ _id: new ObjectId(idProject)}, project);
    return project;
}

/**
 * Elimino un proyecto en la colección 'Projects' de la base de datos a través del método deleteOne() con un filtro por _id (que es un dato único)
 * @param {string} idProject - El identificador único del proyecto a eliminar.
 * @returns {Promise<Object>} - Una promesa que se resuelve retornando el id del proyecto eliminado.
*/
async function deleteOneProject(idProject){
    await client.connect()
    await db.collection('Projects').deleteOne({_id: new ObjectId(idProject)})
    return {
        id: idProject,
    }
}

/** Exporto las funciones */
export {
    getProjects,
    insertOneProject,
    updateOneProject,
    replaceOneProject,
    deleteOneProject
}