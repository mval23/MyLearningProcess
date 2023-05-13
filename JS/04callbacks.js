/**
 * !callback
 * funcion envia parametro - otra func

//function nombre(params, args)

const suma = (a, b) => {
    return a + b
}
let resultado = suma(6, 4)
console.log(resultado)
*/

// const suma = (a, b, callback) => {
//     callback(a + b);
// }

// suma(7, 3, (resultado) => {
//     console.log(resultado);
// });

const suma = (a, b, cb) => cb(a + b);
const print = (data) => console.log(data);
suma(343, 7, print)