/**
 * !Fromas de declarar variables
 * var // global
 * let //local
 * const // palabra reservada (constantes variable funcional)
 */


// V A R
var nombre ; //declaracion
nombre = 'Mariana' // instanciar
var nombre = 'Mariana' //declarar e instancia

//las lineas se cuentan a partir de donde expieze la ejecucion
//entender errores

persona = {
    nombre: 'Mariana',
    apellido: 'Valencia',
    edad: 18,
    fecha: undefined,
    direccion: {
        calle: 42,
        unidad: 'Camino Verde',
        ciudad: 'envigado',
        nums: [3, 4, 6]
    }
}
console.log(persona);


// L E T
// se corre en bloqeu
{
    let mensaje = 'Helo JS';
    console.log(mensaje);
}
console.log(mensaje); // aqui ya no existe mensaje // por fuera del bloque


// C O N S T
//no cambia en el tiepo de ejecucion
//constante
// VA_EN_MAYUSCULA_ASI --buena practica
const ESTE_ES_PI = 3.1416;
ESTE_ES_PI = 3.14; // error
console.log(ESTE_ES_PI);
// no se debe reasignar valor 

