/*8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
…… */

let num = prompt("Ingrese un valor del 1 al 50 para generar una piramide", "1-50")
let flag = 1;

while (num < 0 || num >50) {
    alert("Valor fuera del rango establecido");
    num = prompt("Ingrese un valor del 1 al 50 para generar una piramide", "1-50")
}

for (let index = 1; index <= num; index++) {
    while (index >= flag) {
        document.write(flag);
        flag++;
    }
    flag= 1;
    document.write("<br>")
    
}