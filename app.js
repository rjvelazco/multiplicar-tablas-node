// const argv = require('./config/yargs').argv;
const { argv } = require('./config/yargs');
var colors = require('colors/safe');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

// console.log(module);
// console.log(process.argv);
// let argv2 = process.argv;

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`El archivo ${colors.blue(archivo)} ha sido creado.`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido.');
        break;
}
// console.log(argv);