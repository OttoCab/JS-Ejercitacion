/* 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo
“hola que tal” deberá mostrar “lat euq aloh”. */ 

let text = prompt("Ingrese un texto para imprimirlo al revés");

for (let i = text.length - 1; i >= 0; i--) {
    document.write(text[i]);
}