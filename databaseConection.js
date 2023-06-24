/**
 * Creación de la conexión con la base de datos
 * Importo el modulo del cliente de MongoDB
 * @module mongodb
 * MongoClient: Clase principal del controlador de MongoDB que se utiliza para interactuar con un servidor de mongo.
 * mongodb://127.0.0.1:27017: Ubicación del servidor de MongoDB al que me conecto.
*/
import { MongoClient } from "mongodb";
/**
 * Creo variables para manejar los datos de la ruta del servidor, del cliente de Mongo y el nombre de la base para que a futuro sea más facil de manejar el dato, sin tener que tocar el codigo que se encarga de la conexión.
 * @type {mongoServerLocation} -> Ruta del servidor de MongoDB
 * @type {MongoClient} -> Cliente de MongoDB para conectar a la base de datos.
 * @type {myDatabase} -> Base de datos a la cual preciso conectar
*/
const mongoServerLocation = "mongodb://127.0.0.1:27017";
const client = new MongoClient(mongoServerLocation);
const myDatabase = client.db("AH20231CP1");
/** 
 * Conexión a la BBDD:
 * Uso 'client.connect()': Método asincrónico para establecer la conexión con el servidor de MongoDB. Devuelve una promesa que se resuelve cuando la conexión se establece con éxito.
 * then(function() { ... }): Se ejecuta cuando la conexión se establece con éxito -> En consola muestro "Conexión con BBDD exitosa" y especifico la base de datos a utilizar.
 * catch(function() { ... }): Se ejecuta si la conexión a la base falla -> En consola se muestra el mensaje "No fue posible conectarse a la BBDD".
*/
client.connect()
    .then(function(){
        console.log("Conexión con BBDD exitosa");
        const db = myDatabase;
    })
    .catch(function(){
        console.log("No fue posible conectarse a la BBDD");
    })