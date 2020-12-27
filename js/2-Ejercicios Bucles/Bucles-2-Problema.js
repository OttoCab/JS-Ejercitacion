/*2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación 
en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un numero que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el numero
ingresado no es válido mostrar el mensaje “Introduce un número válido”.*/

let choose = 0;

let note = parseInt(prompt("Ingrese la nota"))

if (note >= 0 && note <= 2) {
    document.write("Muy deficiente")
} else if (note > 2 && note <= 4) { 
    document.write("Insuficiente")
} else if (note > 4 && note <= 6) {   
    document.write("Sucifiente")
} else if (note == 7) {   
    document.write("Bien")
} else if (note > 7  && note <= 9) {
    document.write("Notable")
} else if (note == 10) {
    document.write("Sobresaliente")
} else if (note < 0 || note > 10) {
    alert("Numero no valido")
}


