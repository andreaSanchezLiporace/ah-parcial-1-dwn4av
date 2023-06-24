/*
    Este archivo contiene todas las funciones que muestran información de los clientes en el sitio
*/
// importo la funcion createPage que tengo en el archivo estructuraBase.js dentro de la carpeta pages
import { createPage } from '../pages/estructuraBase.js'

function createClientsSection(clients) {
    // Armo la estructura de html para mostrar la información
    let html = `<section>`
    html += `<div class="container py-4">`
    html += `<h2>Mis Clientes</h2>`
    // Recorro el array con un for para generar una card por cada cliente
    for(let i = 0; i < clients.length; i++) {
        html += `<article class="postcard dark red">`
        html += `<a class="postcard_img_link"><img class="postcard_img" src="${clients[i].foto}" alt="${clients[i].nombre}"></a>`
        html += `<div class="postcard__text">`
        html += `<h3 class="postcard__title red">${clients[i].nombre}</h3>`
        html += `<div class="postcard__bar"></div>`
        html += `<p class="postcard__preview-txt">${clients[i].descripcion}</p>`
        html += `</div>`
        html += `</article>`
    }
    html += `</div>`
    html += `</section>`
    return createPage('Clientes', html)
}

// Exporto las funciones
export {
    createClientsSection,
    createPage
}