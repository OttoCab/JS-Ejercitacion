//11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible 
//(hay que decir todos por los que es divisible)

let number = parseInt(prompt("Escriba un numero para saber si es divisible por 2, 3, 5 o 7"));

if (number%2 == 0) {
    document.write('Es divisible por 2 <br>')
} 
if (number%3 == 0) {
    document.write('Es divisible por 3 <br>')
} 
if (number%5 == 0) {
    document.write('Es divisible por 5 <br>')
} 
if (number%7 == 0) {
    document.write('Es divisible por 7 <br>')
} else if ((number%2 != 0) && (number%3 != 0) && (number%5 != 0)) {
    document.write('El numero no es divisible por 2, 3, 5 o 7 <br>')
}