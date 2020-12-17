let num1 = parseInt(prompt("Ingrese el primer numero a comparar"));
let num2 = parseInt(prompt("Ingrese el segundo numero a comparar"));
let num3 = parseInt(prompt("Ingrese el tercer numero a comparar"));

if ((num1 == num2) && (num2 == num3)) document.write("Todos los numeros son iguales");
else if ((num1 > num2) && (num1 > num3)) document.write("El número más grande es: " + num1);
else if ((num2 > num1) &&(num2 > num3)) document.write("El número más grande es: " + num2);
else document.write("El número más grande es: " + num3);




