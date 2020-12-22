/*4- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, 
la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 
del número elegido por el usuario.*/

let valor = parseInt(prompt("Ingrese un numero para realizar su table de multiplicar"));
let multiplicar;


document.write(`<h4>Tabla de multiplicar</h4>`);
tablaMul(valor);


function tablaMul(num) {
    for (let i = 1; i <= 10 ; i++) {
        multiplicar = num * i;
        document.write(`${num}x${i}=${multiplicar}`); 
        document.write(`<br>`);       
    }
     
}

