const yargs = require('./config/yargs');
const tareas = require('./porHacer/porHacer');

yargs.crearComando('crear', 'ingresar una nueva tarea', ['descripcion']);
yargs.crearComando('listar', 'Lista todas las tareas');
yargs.crearComando('actualizar', 'actualiza estado de tarea', ['descripcion', 'completado']);
yargs.crearComando('eliminar', 'elimina tarea', ['descripcion']);

switch (yargs.valorComando()) {
    case 'crear':
        tareas.crearTarea(yargs.valorPropiedadArgv('descripcion'));
        break;
    case 'listar':
        tareas.listarTareas();
        break;
    case 'actualizar':
        tareas.editarTarea(yargs.valorPropiedadArgv('descripcion'), 'descripcion', true);
        break;
    case 'eliminar':
        tareas.eliminarTarea('descripcion', yargs.valorPropiedadArgv("descripcion"));
        break;
    default:
        console.log('comando no reconocido');
        break;
}