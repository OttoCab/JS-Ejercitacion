let num1 = parseInt(prompt("Ingrese el primer numero a comparar"));
let num2 = parseInt(prompt("Ingrese el segundo numero a comparar"));
let num3 = parseInt(prompt("Ingrese el tercer numero a comparar"));

if ((num1 == num2) && (num2 == num3)) document.write("Todos los numeros son iguales");
else if ((num1 > num2) && (num1 > num3)) document.write("El número más grande es: " + num1);
else if ((num2 > num1) &&(num2 > num3)) document.write("El número más grande es: " + num2);
else document.write("El número más grande es: " + num3);




if ((firstNumb  == secondNumb) && (firstNumb == thirdNumb)) document.write('Los tres números son iguales.');
else if ((firstNumb > secondNumb) && (firstNumb > thirdNumb)) document.write('El número más grande es: ' + firstNumb);
else if ((secondNumb > firstNumb) && (secondNumb > thirdNumb)) document.write('El número más grande es: ' + secondNumb);
else document.write('El número más grande es: ' + thirdNumb);