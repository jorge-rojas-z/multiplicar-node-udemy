const fs = require('fs');
const colors = require('colors');
let data = ''

//se deja con valor por defecto el limite

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) reject(`el valor ${base} es de tipo: ${typeof(base)}`);
        data += '==================================== \n'.green;
        data += `Listando la tabla del ${base} hasta el ${limite}: \n`.yellow;
        data += '==================================== \n'.green;
        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${i * base} \n`.cyan);
        }
        resolve(data);
    })
}

//module.exports.crearArchivo = (base) => {
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) reject(`el valor ${base} es de tipo: ${typeof(base)}`);

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${i * base} \n`);
            //return;
        }

        fs.writeFile(`./tablas/tabla-${base}-al-${limite}.txt`, data, err => {
            if (err) reject(err);

            resolve(`tabla-${base}-al-${limite}.txt`.magenta);
        })
    })
}

// una forma de dejar exportable la funcion
module.exports = { crearArchivo, listarTabla }