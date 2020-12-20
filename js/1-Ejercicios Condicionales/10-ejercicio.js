//10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 
//(sólo hay que comprobar si lo es por uno de los cuatro)
let number = parseInt(prompt("Escriba un numero para saber si es divisible por 2, 3, 5 o 7"));

if (number%2 == 0) {
    document.write('Es divisible por 2 <br>')
} else if (number%3 == 0) {
    document.write('Es divisible por 3 <br>')
} else if (number%5 == 0) {
    document.write('Es divisible por 5 <br>')
} else if (number%7 == 0) {
    document.write('Es divisible por 7 <br>')
} else {
    document.write('El numero no es divisible por 2, 3, 5 o 7 <br>')
}