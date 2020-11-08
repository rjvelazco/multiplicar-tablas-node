// requireds
const fs = require('fs');
var colors = require('colors');

// module.exports.crearArchivo = (base) => { }
let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor recibido ${base} no es un numero.`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base*i}\n`);
        };

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`);
        });
    });
};

let listarTabla = (base, limite) => {
    console.log(`=====================`.red);
    console.log(`==Tabla del ${base}==`.red);
    console.log(`=====================`.red);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

module.exports = {
    // crearArchivo: crearArchivo
    crearArchivo,
    listarTabla
}