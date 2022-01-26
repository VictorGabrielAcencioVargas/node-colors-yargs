const yargs = require("yargs");

function sleep(time, callback) {
  var stop = new Date().getTime();
  while (new Date().getTime() < stop + time) {}
  callback();
}

const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    description: "La base de la tabla de mutiplicar",
  })
  .option("l", {
    alias: "limite",
    type: "number",
    demandOption: true,
    description: "limite de la tabla es decir del 1 al limite",
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
    description: "Mostrar en consola la tabla de multiplicar",
  }).argv;

module.exports = argv;
