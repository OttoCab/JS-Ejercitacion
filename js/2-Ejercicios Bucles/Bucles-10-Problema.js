/*10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro cada una de las celdas 
deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números 
irán del 35 al 1. */

let row = prompt("Ingrese el numero de filas");
let column = prompt ("Ingrese el numero de columnas");
let celdas = row*column;

for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
        document.write(`|${celdas}|`);   
        celdas--;
    }
    document.write("<br>");
}

// document.write(row + "<br>");
// document.write(column + "<br>");
// document.write(celdas);