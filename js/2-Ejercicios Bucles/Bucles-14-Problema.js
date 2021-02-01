/* 14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre
cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir
“h-o-l-a- -q-u-e- -t-a-l”. */

let chains = prompt('Ingrese un texto para mostrarlo con "-" ');


for (let i = 0; i < chains.length; i++) {
    if (i == chains.length -1) {
        document.write(chains[i])   
    } else {
        document.write(`${chains[i]}-`)
    }
    
}

//document.write(lenght);