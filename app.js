const { number, options } = require("yargs");
const { crearArchivo } = require("./helpers/multiplicar");
// const argv = require("yargs")
//   .option("b", {
//     alias: "base",
//     demandOption: true,
//     type: "number",
//   })
//   .check((argv, options) => {
//     if(isNaN(argv.b)) throw 'La base tiene que ser un número';
//     return true;
//   }).argv;

//console.clear();
//console.log(process.argv); //esto imprime un array mediante el cual no podemos extraer algún parámetro basado en su identificador, por tanto no es la mejor opcion, por ello usamos el modulo yargs el cual nos sirve para trabajar con información pasada mediante la consola.
//console.log(argv); //objeto que almacena los valores pasados como argumentos además tener presente que mediante yargs podemos establecer que tipo de datos deseamos recibir como parametro

/* const base = 10;
const archivo = `tabla-${base}.txt`;
crearArchivo(archivo, base)
  .then((archivo) => console.log(archivo, " creado"))
  .catch((err) => console.log(err)); */

//El trabajo consiste en imprimir en un documento txt la tabla de multiplicar de acuerdo a parametros pasados como base, limite y mostrar, en los cuales base y limite seran necesarios y por defecto mostrar será true

//este objeto argv con las opciones y checkeos deben estar en una archivo separado, al igual que en java

/* function sleep(time, callback) {
  var stop = new Date().getTime();
  while (new Date().getTime() < stop + time) {}
  callback();
}

const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
  })
  .option("l", {
    alias: "limite",
    type: "number",
    demandOption: true,
  })
  .check((argv, options) => {
    console.log("Verificando ...");
    sleep(1500, () => {});
    if (isNaN(argv.b) || isNaN(argv.l))
      throw new Error("Has ingresado argumentos no válidos");
    console.log("correcto");
    return true;
  })
  .option("m", { 
    alias: "mostrar",
    type: "boolean",
    default: false,
  }).argv; */

const argv = require("./config/yargs");
console.log(argv);

//Pero si en la ejecucion del programa le pasamos un valor al parametro no convertible a number entonces por el type coertion este será NaN, entonces, para manejar ello vamos a establecer el check

console.log("construyendo su archivo");

const archivo = `tabla-${argv.b}.txt`;
crearArchivo(archivo, argv.b, argv.l, argv.m)
  .then((archivo) =>
    console.log(String(archivo).rainbow + " construido correctamente")
  )
  .catch((err) => console.log(err));
