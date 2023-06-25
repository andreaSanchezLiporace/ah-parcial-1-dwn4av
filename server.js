/**
 * Creación servidor: configuro e inicio el servidor.
 * Importo el modulo express para crear la aplicación del servidor
 * @module express
 * --
 * Importación de módulos de rutas para el manejo de proyectos.
 * @module ProjectRoute -> tiene definidas las rutas y los controladores del sitio web.
 * @module ProjectRouteApi -> tiene definidas las rutas y los controladores de la api.
 * --
 * Importación de módulos de rutas para el manejo de clientes.
 * @module ClientRoute -> tiene definidas las rutas y los controladores del sitio web.
 * @module ClientRouteApi -> tiene definidas las rutas y los controladores de la api.
*/
import express from 'express'
import ProjectRoute from './routes/projects.routes.js'
import ClientRoute from './routes/clients.routes.js'
import ProjectRouteApi from './api/routes/projects.api.routes.js'
import ClientRouteApi from './api/routes/clients.api.routes.js'

/**
 * Creo la instancia de la aplicacion express 
 * Guardo una variable el puerto en el que se ejecutará el servidor.
*/
const app = express();
const port = 2222;

/**
 * Uso express.json para interpretar el body como un JSON
*/
app.use('/api', express.json())

/**
 * Configuración de recursos estáticos.
 * Se utiliza el middleware express.static para servir los archivos estáticos. Entonces, cualquier solicitud a la ruta raíz ('/') o cualquier otra ruta coincidente buscará y servirá archivos estáticos desde la carpeta 'public'.
 */
app.use('/', express.static('public'))

/**
 * Configuración de recursos dinámicos relacionados a:
 * Proyectos: ProjectRoute -> sitio web / ProjectRouteApi -> api
 * Clientes: ClientRoute -> sitio web / ClientRouteApi -> api
 * Uso método `.use()`: para asociar los módulos de rutas importados a las rutas correspondientes.
*/
app.use('/', ProjectRoute)
app.use('/', ClientRoute)
app.use('/api', ProjectRouteApi) 
app.use('/api', ClientRouteApi) 

/**
 * Configuración del servidor.
 * Se utiliza el método listen() en la instancia de la aplicación para iniciar el servidor y ponerlo a la escucha en el puerto especificado -> port = 2222 
 * Imprime un mensaje en la consola indicando el puerto al que el servidor está escuchando.
*/
app.listen(port, function () {
    console.log('Ingresa al sitio con este link: http://localhost:'+ port)
});