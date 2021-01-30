/*6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
……*/
let piramide = 1;
if (confirm("Desea realizar una piramide \n   Pulse Aceptar para hacerlo \n   Pulse Cancelar para salir")) {
  for (let index = 1; index <= 30; index++) {
    while (piramide <= index) {
      document.write(index);
      piramide++;
    }
    piramide = 1;
    document.write("<br>")
  }
} else {
  document.write("Adios");
}
