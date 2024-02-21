import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

const URL = "http://localhost:3000/usuarios"
const texto = document.getElementById("nombre")
const tbody = document.getElementById("tbody")
const Guardar = document.getElementById("Guardar")
const Actualizar = document.getElementById("Actualizar")
let idCache

document.addEventListener('DOMContentLoaded', consumirDatos)
tbody.addEventListener('click', (event) => {
    if (event.target.classList.contains("btn-danger")) {
        const id = event.target.getAttribute("data-id")
        eliminarDatos(id)
    }

    if (event.target.classList.contains("btn-warning")) {
        idCache = event.target.getAttribute("data-id")
        actualizarDatos(idCache)
    }

})

Guardar.addEventListener('click', guardarDatos)
Actualizar.addEventListener('click', actualizarDatos)

async function consumirDatos() {
    const solicitud = await fetch(URL)
    const datos = await solicitud.json()
    tbody.innerHTML = ``
    datos.forEach(element => {
        tbody.innerHTML +=
            `
        <tr>
          <th scope="row">${element.id}</th>
          <td>${element.nombre}</td>
          <td>
            <button type="button" class=" btn btn-warning" data-id="${element.id}">Editar</button>
            <button type="button" class="btn btn-danger" data-id="${element.id}">Eliminar</button>
          </td>
        </tr>
        `
    })
}

async function guardarDatos() {
    const usuario = {
        nombre: texto.value
    }

    const solicitud = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
    })

    if (solicitud.ok) {
        alert(solicitud.statusText)
    } else {
        alert(solicitud.statusText)
    }

    consumirDatos()
}

async function actualizarDatos() {
    const usuario = {
        nombre: texto.value
    }

    const solicitud = await fetch(URL, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
    })

    if (solicitud.ok) {
        alert(solicitud.statusText)
    } else {
        alert(solicitud.statusText)
    }

    idCache = undefined
    consumirDatos()
}

async function eliminarDatos(id) {
    const solicitud = await fetch(`${URL}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })

    if (solicitud.ok) {
        alert(solicitud.statusText)
    } else {
        alert(solicitud.statusText)
    }

    consumirDatos()
}