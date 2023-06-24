/*
    Este archivo contiene todas las funciones que muestran información de los proyectos en el sitio
*/
// importo la funcion createPage que tengo en el archivo estructuraBase.js dentro de la carpeta pages
import { createPage } from '../pages/estructuraBase.js'

function createProjectsSection(projects) {
    // Armo la estructura de html para mostrar la información
    let html = `<section>`
    html += `<div class="container py-4">`
    html += `<h2>Proyectos realizados</h2>`
    // Recorro el array con un for para generar una card por cada proyecto
    for(let i = 0; i < projects.length; i++) {
        html += `<article class="postcard dark red">`
        html += `<a class="postcard_img_link"><img class="postcard_img" src="${projects[i].img}" alt="${projects[i].name}"></a>`
        html += `<div class="postcard__text">`
        html += `<h3 class="postcard__title red">${projects[i].name}</h3>`
        html += `<p class="postcard__subtitle small">Sección: ${projects[i].section}</p>`
        html += `<div class="postcard__bar"></div>`
        html += `<a class="postcard-text" href="${projects[i].link}">Repositorio: ${projects[i].link}</a>`
        html += `<p class="postcard__preview-txt">${projects[i].description}</p>`
        html += `<ul class="postcard__tagbox">`
        const technologies = projects[i].technologies;
        for (let j = 0; j < technologies.length; j++) {
            html += `<li class="tag__item">${technologies[j]}</li>`;
        }
        html += `</ul>`
        html += `</div>`
        html += `</article>`
    }
    html += `</div>`
    html += `</section>`
    return createPage('Proyectos', html)
}

// Exporto las funciones
export {
    createProjectsSection,
    createPage
}
