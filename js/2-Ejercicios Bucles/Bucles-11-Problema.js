/*11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp */

//FORMA 1

let usarName = [], age = [];
let bigNum = 0, pos = 0;

for (let i = 0; i < 3; i++) {
    usarName.push(prompt("Ingrese un nombre: "))
    age.push(prompt("Ingrese una edad: "))
}

bigNum = Math.max(age[0], age[1], age[2]);

for (let i = 0; i < 3; i++) {
    if (bigNum == age[i]) {        
        pos = i;
    }

}

document.write(usarName[pos])


//FORMA 2

// let usarName = [];
// let age = 0, bigNum = 0, pos = 0; 

// for (let i = 0; i < 3; i++) {
//     usarName.push(prompt("Ingrese un nombre: "))
//     age = prompt("Ingrese una edad: ")

//     if (age > bigNum) {
//         bigNum = age;
//         pos = i;        
//     }

// }

// document.write(usarName[pos])