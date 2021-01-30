//5- Realizar una página con un script que calcule el valor de la letra de un número de DNI
//(Documento nacional de identidad).

//El algoritmo para calcular la letra del dni es el siguiente :

// *El número debe ser entre 0 y 99999999
// *Debemos calcular el resto de la división entera entre el número y el número 23.
// *Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:
//  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
// *Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
// *Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

let numDNI = prompt("Ingrese el numero de su DNI");
let flag = true;

while (flag) {
  //Si el valor cargado es incorrecto, solicito que lo vuelva a ingresar
  while (isNaN(numDNI)) {
    alert("No se ingreso un valor valido");
    numDNI = prompt("Ingrese el numero de su DNI");
  }

  //Compruebo que el el numero ingresado este en el rango especificado
  while (numDNI < 0 || numDNI > 99999999) {
    alert("El numero de documento ingresado no es valido");
    numDNI = prompt("Ingrese de nuevo el numero de su DNI");
  }
  flag=false;
}

let resto = numDNI % 23;
let letter = "";
//letter (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
switch (resto) {
    case 0:
    letter = "T"
        break;
    case 1:
    letter = "R"
        break;
    case 2:
    letter = "W"
        break;
    case 3:
    letter = "A"
        break;
    case 4:
    letter = "G"
        break;
    case 5:
    letter = "M"
        break;
    case 6:
    letter = "Y"
        break;
    case 7:
    letter = "F"
        break;
    case 8:
    letter = "P"
        break;
    case 9:
    letter = "D"
        break;
    case 10:
    letter = "X"
        break;
    case 11:
    letter = "B"
        break;
    case 12:
    letter = "N"
        break;
    case 13:
    letter = "J"
        break;
    case 14:
    letter = "Z"
        break;
    case 15:
    letter = "S"
        break;
    case 16:
    letter = "Q"
        break;
    case 17:
    letter = "V"
        break;
    case 18:
    letter = "H"
        break;
    case 19:
    letter = "L"
        break;
    case 20:
    letter = "C"
        break;
    case 21:
    letter = "K"
        break;
    case 22:
    letter = "E"
        break;

    default:
        break;
}

document.write("El numero de DNI ingresado es: " + numDNI + "<br>");
document.write("Y su letra correspondiente es: " + letter);