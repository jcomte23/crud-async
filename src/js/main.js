import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

// EJEMPLO UNO
// console.log("uno")
// console.log("dos")
// setTimeout(() => {
//     alert("tres")
// }, 5000);
// console.log("cuatro")
// console.log("cinco")















// EJEMPLO DOS
const URL = "https://api.spacexdata.com/v3/launches"
const Consumir = document.getElementById("Consumir")

Consumir.addEventListener('click',consumirDatos)

async function consumirDatos() {
    const solicitud = await fetch(URL)
    const datos = await solicitud.json()
    console.clear()
    console.table(datos)
}



