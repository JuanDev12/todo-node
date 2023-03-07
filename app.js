// Paquetes de terceros
require('colors');
// Paquetes propios
const { mostrarMenu, pausa } = require('./helpers/mensajes');


console.clear();

const main = async() => {
    console.log('HOLA MUNDO');
    mostrarMenu();
    // pausa();
}

main();