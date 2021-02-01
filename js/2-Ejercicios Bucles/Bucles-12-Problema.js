/* 12- Realiza un script que genere un número aleatorio entre 1 y 99 */


// Math.floor me devuelve un valor "x" redondeando hacia abajo
// Math.floor(4.7), //devuelve 4
//Math.random() me devuelve un numero entre 0 (incluido) y 1(no incluido)
//Math.random(x) devuelve por ej 0.126... o 0.568... o 0.913..
let randomNum = Math.floor(Math.random() * 99) + 1;

document.write(randomNum);