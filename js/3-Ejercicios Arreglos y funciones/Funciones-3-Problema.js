/*3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear 
una función para calcular su perímetro y mostrarlo por pantalla.

*La fórmula del perímetro  es p = 2*(a +b) */

let x = parseInt(prompt("Ingrese de la base del rectangulo"))
let y = parseInt(prompt("Ingrese de la altura del rectangulo"))

document.write("El valor del perimetro es de: " + perimetro(x, y));

function perimetro(base, altura) {
    p = 2 * (base + altura);
    return p;
}

