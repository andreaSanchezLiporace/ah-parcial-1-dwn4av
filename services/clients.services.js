/**
 * Este archivo contiene todas las funciones que se encargan de interactuar con la coleccion 'Cliente' de la BBDD
 * Importo el módulo necesario para trabajar con la base de datos MongoDB.
 * @module mongodb -> Mongo Client
 */
import { MongoClient } from 'mongodb';
/**
 * @type {MongoClient} -> Cliente de MongoDB para conectar a la base de datos.
 * @type {Db} -> Base de datos a la cual preciso conectar
 */
const clientDataBase = new MongoClient("mongodb://127.0.0.1:27017");
const db = clientDataBase.db("AH20231CP1");

/**
 * Obtiene todos los clientes a través del uso del método find()
 * @returns {Promise<Array>} - Promesa que se resuelve con un array de proyectos (a través de toArray()).
*/
async function getClients(){
    await clientDataBase.connect();
    return db.collection('Cliente').find().toArray()
}

/**
 * Creo un nuevo cliente en la colección 'Cliente' a través del uso del método insertOne.
 * @param client - Los datos del cliente a crear.
 * @returns {Promise<Object>} - Promesa que se resuelve con el cliente creado.
*/
async function insertOneClient(client) {
    await clientDataBase.connect();
    await db.collection('Cliente').insertOne(client);
    return client;
}

// Exporto todas las funciones para poder usarlas en el programa
export {
    getClients,
    insertOneClient
}