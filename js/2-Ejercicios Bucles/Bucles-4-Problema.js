/*4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con 
un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números 
introducidos.*/

let num;
let sum = 0;
let flag = false;
do {
  num = parseInt(prompt("Ingrese un numero a sumar", 123));
  if (!isNaN(num)) {
    sum += num;
    flag = true;
  } else {
    alert("No ingreso un valor valido");
  }
} while (confirm("Desea continuar ingresando numeros? Pulse Aceptar para continuar \n Pulse cancelar para salir"));
if (flag) {
  document.write("Resultado: " + sum);
} else {
  document.write("Resultado: ");
}