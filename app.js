//import tradicional
const mult = require('./multiplicar/multiplicar');
const colors = require('colors');
//import destructurado
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
//console.log(mult);
//console.log(process.argv);

//FORMA PRIMITIVA DE OBTENER VALORES POR CONSOLA 
//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];
//console.log(argv2);

//contenigo del argv desde yargs
console.log(argv);

//console.log(argv.base);
//console.log(argv.limite);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        //console.log('listar');
        listarTabla(argv.base, argv.limite)
            .then(listado => console.log(listado))
            .catch(err => console.log(err));
        break;
    case 'crear':
        //console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}.`.green))
            .catch(err => console.log(err));
        break;
    default:
        console.log('comando no valido');
}