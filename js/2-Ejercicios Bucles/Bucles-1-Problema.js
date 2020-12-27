/*1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede 
conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.*/


let age=prompt("Ingrese su edad para saber si es apto para conducir")

if (age >= 18) {
    document.write("Usted puede sacar el carnet de manejo")
} else{
    alert("Es menor de edad, no puede manejar aun")
}