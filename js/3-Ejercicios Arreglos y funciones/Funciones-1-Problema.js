/*1- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve
 como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el 
 resultado devuelto por la función.*/

let valor = parseInt(prompt("Ingrese un numero para saber si es par o impar"));

parImpar(valor);

function parImpar(num) {
    if(num%2 ==0){
        document.write("El numero es par")
    } else{
        document.write("El numero es impar")
    }

 }