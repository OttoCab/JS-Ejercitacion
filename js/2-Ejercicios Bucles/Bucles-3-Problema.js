/*3- Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al salir con “cancelar” 
deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp*/

let chains= prompt("Ingrese una cadena de texto:");


while (flag = confirm("Desea Ingresar otra cadena de texto \nPulse cancelar para salir")) {
    chains += "-" + prompt("Ingrese una cadena de texto:") 
}

document.write(chains);