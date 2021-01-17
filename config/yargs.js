const paqueteYargs = require('yargs');


function crearComando(titulo, descripcion, argumentos) {
    let objetoComando = {};
    if (argumentos) {
        for (const argumento of argumentos) {
            objetoComando[argumento] = {
                alias: argumento.charAt()
            }
        }
    }
    paqueteYargs.command(titulo, descripcion, objetoComando);
}

function estadoArgv() {
    return paqueteYargs.argv;
}

function valorPropiedadArgv(prop) {
    return estadoArgv()[prop];
}

function valorComando() {
    return estadoArgv()._[0];
}

module.exports = {
    crearComando,
    estadoArgv,
    valorPropiedadArgv,
    valorComando
}