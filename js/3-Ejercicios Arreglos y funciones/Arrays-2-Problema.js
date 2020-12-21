/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y 
almacenarlas en un arreglo, cuando el usuario seleccione cancelar o ingrese el valor “0” 
se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

*Mostrar la longitud del arreglo.
*Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
*Añade en última posición la ciudad de París.
*Escribe por pantalla el elemento que ocupa la segunda posición.
*Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.*/

let arraycity = [];
let city, next = true;

do {
    city = prompt("Ingrese el nombre de una ciudad a agregar");
    
    if (city == "0" || city == "") {
        document.write("<h4>Se ingreso 0 o vacio </h4>");
        next = false; //go out of array
    } else {      
        arraycity.push(city);  
        confirm("Desea Continuar");
    }
} while (next == true)


//Longitud del arreglo
document.write(`<h4>Longitud del Arreglo</h4>`);
document.write(`Longitud: ${arraycity.length} <br>`);
//Muestro el arreglo
show();

//Items de las posiciones 1°, 3° y ultima
document.write(`<h4>Ciudades de la 1°, 3° y ultima posicion </h4>`);
ultposicion = arraycity.length - 1; //Obetengo la ultima posicion
if (arraycity.length > 2) {    
    document.write(`1° posicion: ${arraycity[0]} <br>`);
    document.write(`3° posicion: ${arraycity[2]} <br>`);      
    document.write(`Ultima posicion: ${arraycity[ultposicion]} <br>`);    
}else {
    document.write(`<h4>El arreglo tiene 1 o 2 posiciones</h4>`);
    document.write(`1° posicion: ${arraycity[0]} <br>`);
    document.write(`Ultima posicion: ${arraycity[ultposicion]} <br>`); 
}

//Añade en la ultima posicion Paris
document.write(`<h4>Añado en la ultima posicion Paris</h4>`);
arraycity.push("Paris");
show();

//Items de la 2° posición
document.write(`<h4>Elemento de la 2° posicion</h4>`);
document.write(`2° posicion: ${arraycity[1]} <br>`);
//Sustituye la 2° posición por Barcelona
document.write(`<h4>Se sustituye la 2° posicion por Barcelona</h4>`);
arraycity[1]="Barcelona";
show();

function show() {
    for (let index = 0; index < arraycity.length; index++) {
        document.write(arraycity[index] + "/");      
    }
}






