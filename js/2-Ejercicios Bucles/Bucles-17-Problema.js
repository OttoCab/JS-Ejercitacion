/* 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por
teclado. */

let text = prompt("Ingrese un texto para indicar la posicion de la primera vocal");
let aux;

for (let i = 0; i < text.length; i++) {
    if (text[i] == 'a' || text[i] == 'e' || text[i] == 'i' || text[i] == 'o' || text[i] == 'u') {
        aux = i + 1; 
        break;       
    }
    
}
document.write(`Posicion de la primera vocal: ${aux}`);