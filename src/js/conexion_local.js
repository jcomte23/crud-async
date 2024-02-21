import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

const URL = "https://api.spacexdata.com/v3/launches"
const Consumir = document.getElementById("Consumir")
const Guardar = document.getElementById("Guardar")
const Actualizar = document.getElementById("Actualizar")
const Eliminar = document.getElementById("Eliminar")

Consumir.addEventListener('click',consumirDatos)
Guardar.addEventListener('click',guardarDatos)
Actualizar.addEventListener('click',actualizarDatos)
Eliminar.addEventListener('click',eliminarDatos)

async function consumirDatos() {
    const solicitud = await fetch(URL)
    const datos = await solicitud.json()
    console.clear()
    console.table(datos)
}

async function guardarDatos() {
    const solicitud = await fetch(URL)
    const datos = await solicitud.json()
    console.clear()
    console.table(datos)
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