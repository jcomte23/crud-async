import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

const URL = "http://localhost:3000/usuarios"
const tbody = document.getElementById("tbody")
const Guardar = document.getElementById("Guardar")
const Actualizar = document.getElementById("Actualizar")
const Eliminar = document.getElementById("Eliminar")

document.addEventListener('DOMContentLoaded', consumirDatos)

Guardar.addEventListener('click', guardarDatos)
Actualizar.addEventListener('click', actualizarDatos)
Eliminar.addEventListener('click', eliminarDatos)

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
            <button id="Actualizar" type="button" class=" btn btn-warning">Editar</button>
            <button id="Eliminar" type="button" class=" btn btn-danger">Eliminar</button>
          </td>
        </tr>
        `
    })
}

async function guardarDatos() {
    const solicitud = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nombre: "usuario" })
    })
    
    if (solicitud.ok) {
        alert(solicitud.statusText)
    }else{
        alert(solicitud.statusText)
    }
    
    consumirDatos()
}

async function actualizarDatos() {
    const solicitud = await fetch(URL)
    const datos = await solicitud.json()
    console.clear()
    console.table(datos)
}

async function eliminarDatos() {
    const solicitud = await fetch(URL)
    const datos = await solicitud.json()
    console.clear()
    console.table(datos)
}