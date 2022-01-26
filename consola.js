//recibiendo información de la consola
console.log(process.argv)

//podemos pasarle la base de una operacion por consola al ejecutar nuestra aplicacion de la siguiente forma:
//node consola --base = 5
//el valor de process.argv es primero es la carpeta donde se encuentra instala node
//el segundo valor de la variable es la direccion de la aplicacion ejecutada
//tercer valor son los argumentos que se les pasa al ejecutar la aplciacion

const [,,arg3='--base=3'] = process.argv;
const [,base] = arg3.split("=");

console.log('arg3 :>> ', arg3);
console.log('base :>> ', base);
