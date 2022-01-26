//paa manipular usaremos el modulo de FyleSystem

const fs = require("fs");
const colors = require('colors');

//este modulo contendrá una función la cual será capaz de crear archivo y almacenar en ella una data la cual será una tabla de multiplicar de acuerdo a la base pasada como argumento a dicha funcion

const crearArchivo = async (archivo, base,limite,mostrar) => {
  let consola = `=======================
TABLA DEL ${base}
=======================`.red;
  let data='';
  try {
    for (i = 1; i <= limite; i++) {
      consola += `\n${String(base).magenta} ${'x'.green} ${String(i).magenta} = ${String(base * i).italic.yellow}`;
      data += `${base} x ${i} = ${base * i}\n`;
    }
    if(mostrar) console.log(consola);
    fs.writeFileSync(`./salida/${archivo}`, data);
    return archivo;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
