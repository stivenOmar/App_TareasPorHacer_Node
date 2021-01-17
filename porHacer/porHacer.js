const fileSystem = require('fs');
const color = require('colors');
let tareasJson = require('../db/data.json');

function guardarTarea(contenido) {
    escribirEnArchivoJSON('./db/data.json', contenido);
}

function escribirEnArchivoJSON(ruta, contenido) {
    escribirEnArchivo(ruta, JSON.stringify(contenido));
}

function escribirEnArchivo(ruta, contenido) {
    try {
        fileSystem.writeFile(ruta, contenido, (error) => {
            console.log("Guardado!");
        })
    } catch (error) {
        console.log("ERROR al guardar");
    }
}

function crearTarea(descripcion) {
    let tarea = {
        descripcion,
        completada: false
    }
    tareasJson.push(tarea);
    guardarTarea(tareasJson);
}

function listarTareas() {
    let listaTareas;
    for (const tarea of tareasJson) {
        listaTareas += `${color.green("==========POR HACER===========")}
        descripcion : ${tarea.descripcion}
        Estado : ${tarea.completada}
        ${color.green("=========================")}
        \n`
    }
    console.log(listaTareas);
}

function existeTarea(propiedad, valor) {
    let indice = tareasJson.findIndex(tarea => {
        return tarea[propiedad] === valor;
    })
    return indice;
}


function editarTarea(tarea, propiedad, contenido) {
    let indiceTarea = existeTarea(propiedad, tarea);
    console.log(indiceTarea);
    if (indiceTarea === -1) {
        console.log('Tarea no existe');
    } else {
        let propiedadActualizar = "completada";
        tareasJson[indiceTarea][propiedadActualizar] = contenido;
        guardarTarea(tareasJson);
    }
}

function eliminarTarea(propiedad, valor) {
    let indiceTarea = existeTarea(propiedad, valor);
    if (indiceTarea === -1) {
        console.log('Tarea no existe');
    } else {
        tareasJson.splice(indiceTarea);
        guardarTarea(tareasJson);
    }
}

module.exports = {
    crearTarea,
    listarTareas,
    editarTarea,
    eliminarTarea,
    existeTarea
}