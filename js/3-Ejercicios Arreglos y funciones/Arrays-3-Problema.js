/*3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para 
obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado 
de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta 
operación.*/

let dado1, dado2, sum, acc = 0, cont = 1;
let sumDados = []; 



while (cont <= 50) {
    dado1 = Math.floor(Math.random() * 6) + 1;
    dado2 = Math.floor(Math.random() * 6) + 1;
    sum = dado1 + dado2;
    sumDados.push(sum);
    //document.write(cont +"-"+ sum + "<br>"); corroboro que de 50 vueltas y sume los resultados    
    cont++;
}

document.write(`<h4>Numero de veces que sale un valor</h4>`);

for (let i = 2; i <= 12; i++) { //Segun el valor realizo un for que busca en el vector cuantas coincidencias hay
    for (let j = 0; j < sumDados.length; j++) {
        if (i == sumDados[j]) {
            acc++;             
        }        
    }
    document.write(`${i}-${acc}<br>`);
    acc=0;
}


