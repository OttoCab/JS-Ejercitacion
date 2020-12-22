/*2- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. 
A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, 
sólo por minúsculas o por una mezcla de ambas.*/

let text = prompt("Ingrese un texto para saber si se compone de MAYUSCULAS, minusculas o una mezcla de ambas");
let flagUpper = 0, flagLower = 0;

chain(text);

function chain(cadena) {
    for (let i = 0; i < cadena.length; i++) {
        let caracter = cadena.charAt(i) //Obtengo el caracter
        if (caracter.toUpperCase() == caracter) {
            flagUpper++; //Si ese caracter es igual al caracter en mayusculas.
        } else if (caracter.toLowerCase() == caracter) {
            flagLower++;//Si ese caracter es igual al caracter en minusculas
        }
    }
    if (flagUpper != 0 && flagLower != 0) {
        document.write("Contiene MAYUSCULAS y minusculas");
    }else if (flagUpper != 0 && flagLower == 0){
        document.write("Contiene MAYUSCULAS");
    }else {
        document.write("Contiene minusculas");
    }
}



