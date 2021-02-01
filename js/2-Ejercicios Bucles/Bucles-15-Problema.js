/* 15- Realiza un script que cuente el número de vocales que tiene un texto. */

let text = prompt("Ingrese un texto para contar el numero de vocales");
let cont = 0;

for (let i = 0; i < text.length; i++) {
    if (text[i] == 'a' || text[i] == 'e' || text[i] == 'i' || text[i] == 'o' || text[i] == 'u') {
        cont++;        
    }
    
}
document.write(`Numero de vocales: ${cont}`);