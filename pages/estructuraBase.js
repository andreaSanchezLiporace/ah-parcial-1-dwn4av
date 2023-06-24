/**
 * Este archivo contiene la función que se encarga de crear la estructura básica de cada sección del sitio:
 * - DOCTYPE,
 * - head,
 * - body, 
 * - header -con nav + h1-,
 * - footer.
 * Los estilos de toda esta estructura se encuentran en el archivo basicStyle.css de la carpeta css que se encuentra en la carpeta public del proyecto.
 * Ver como crear la carga dinamica del css del contenido de perfil, listado proyectos, nuevo proyecto, ver proyecto, cambiar proyecto, eliminar proyecto, listado clientes, ver cliente, nuevo cliente, modificar cliente.
*/

/**
 * Crea la estructura básica html, con un título y contenido especifico.
 * @param {string} title - El título de la página.
 * @param {string} content - El contenido HTML de la página.
 * @returns {string} - La página HTML generada.
 */
function createPage(title, content) {
    let html;
    html = '<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8">'
    html += '<meta http-equiv="X-UA-Compatible" content="IE=edge">'
    html += '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
    html += '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">'
    html += '<link rel="stylesheet" href="/css/styles.css">'
    html += '<title>' + title + '</title>'
    html += '</head>'
    html += '<body>'
    html += '<header>'
    html += '<h1>Portfolio de proyectos</h1>'
    html += '<p><em>Andrea Sánchez Liporace</em></p>'
    html += '<nav>'
    html += '<ul class="nav justify-content-end">'
    html += '<li class="nav-item"><a class="nav-link" href="/projects/mobile">Mobile</a></li>'
    html += '<li class="nav-item"><a class="nav-link" href="/projects/landing">LandingPage</a></li>'
    html += '<li class="nav-item"><a class="nav-link" href="/projects/webapp">Web App</a></li>'
    html += '<li class="nav-item"><a class="nav-link" href="/projects/ecommerce">E-commerce</a></li>'
    html += '<li class="nav-item"><a class="nav-link" href="/projects/games">Games</a></li>'
    html += '</ul>'
    html += '</nav>'
    html += '</header>'
    html += content
    html += '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>'
    html += '</body></html>'
    return html;
}

/**
 * Exportación de funciones del módulo.
 * @module estructuraBase
 */
export {
    createPage,
}