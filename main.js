/* let h1 = document.querySelector("#myId");
h1.innerHTML = null;
h1.insertAdjacentText("beforeend", "HOLA");
console.log(h1); */

let array = ["CARLOS", "FARIT", "TORRES", "GELVES"];

/**
 * 
 * @param {string} a esto es una string
 * @param {*} b 
 * @param {*} c 
 * @param {*} d 
 */
function saludar(a, b, c, d) {
    console.log(`Hola ${a}`);
    console.log(`Hola ${b}`);
    console.log(`Hola ${c}`);
    console.log(`Hola ${d}`);
}

saludar(...array); // destructura el codigo por indice array

let obj = {
    nombre: "juan",
    apellido: "perez"
}

function saluda2({nombre,apellido}) {
    console.log(`Hola ${nombre}`);
    console.log(`Hola ${apellido}`);
}

saluda2({...obj}); // destructura el codigo por indice objeto