/*7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario 
(no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
 */

let num = parseInt(prompt("Ingresa desde que numero desea realiza la piramida inversa, no debe ser mayor a 50", "1-50"));
let flag = 1;
//agregar una forma para que me detecte que ingreso algo

//confirmo que este en el intervalo
while (num < 0 || num > 50) {
    num = prompt("Debe ingresar un numero entre 1 y no mayor a 50");
}

if (confirm("Desea realizar una piramide invertida\n   Pulse Aceptar para hacerlo \n   Pulse Cancelar para salir")) {
    //como es una piramide invertida realizo un for inverso
    for (num; num > 0; num--) {
        while (num >= flag) {
            document.write(num);
            flag++;
        }
        // reinicio la bandera para que imprima el numero la cantidad de veces correctas
        flag = 1;
        document.write("<br>")
    }
} else {
    document.write("Adios");
}