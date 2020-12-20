//9.- Escribe un programa que pida una frase y escriba las vocales que aparecen

let sentence = prompt("Escriba una frase a analizar");
let flag=false;
//document.write(sentence.length + "<br>");

for (let index = 0; index < sentence.length; index++) {
    if ((sentence.substr(index, 1) == 'a') || (sentence.substr(index, 1) == 'e') 
    || (sentence.substr(index, 1) == 'i') || (sentence.substr(index, 1) == 'o') 
    || (sentence.substr(index, 1) == 'u')) {
        if (flag == false) {
            document.write(`${sentence.substr(index, 1)}`);
            flag=true
        } else{
            document.write(`_${sentence.substr(index, 1)}`);
        }
        
    }      
}
        