import './style.css'


// !1. Declaración y Asignación: Declara una variable llamada nombre y asígnale tu nombre como valor.

let nombre ="Jesus";
console.log(nombre);

// !2. Tipos de Datos: Crea variables para almacenar un número entero (edad), un número decimal (precio), una cadena de texto (ciudad) y un valor booleano (esEstudiante).

const edad = 31;
const precio = 20.01;
const ciudad = "buenosAires";
const esEstudiante = true;

console.log(edad);
console.log(precio);
console.log(ciudad);
console.log(esEstudiante);

// !3. Concatenación: Declara dos variables (nombre, apellido) y muestra un mensaje que diga "Hola, [nombre] [apellido]".

const apellido = "Nastasi";

/* let mensaje = "hola, " + nombre + " " + apellido; */

let mensaje = `hola,  ${nombre} ${apellido} `;
console.log(mensaje);

// !4. Operaciones Matemáticas: Declara dos variables numéricas (num1, num2) y realiza las operaciones básicas (suma, resta, multiplicación, división) con ellas.

let num1 = 2;
let num2 = 4;


// ? suma 
const suma = num1 + num2;
const resultado1 = `el resultado de la suma de ${num1}+${num2}=${suma}`;
console.log(resultado1);

// ? resta
const resta = num1 - num2;
const resultado2 = `el resultado de la resta de ${num1}-${num2}=${resta}`;
console.log(resultado2);

// ? multiplicacion

const multiplicar = num1 * num2;
const resultado3 = `el resultado de la multiplicacion de ${num1}*${num2}=${multiplicar}`;
console.log(resultado3);

// ? Division

const division = num2 / num1;
const resultado4 = `el resultado de la division de ${num2} / ${num1} = ${division}`;
console.log(resultado4);

// !5. Incremento y Decremento: Declara una variable (contador) y utiliza los operadores de incremento (++) y decremento (--) para modificar su valor.

let contador = 1

console.log(contador++);
console.log(contador++);
console.log(contador++);
console.log(contador--);
console.log(contador--);
console.log(contador--);
console.log(contador--);
console.log(contador--);
console.log(contador--);

// !6. Prompt y Alert: Pide al usuario que ingrese su nombre mediante prompt() y luego muestra un mensaje de bienvenida con alert().


const ingreseSuNombre = prompt("ingresa tu nombre porfavor:");

alert( " Bienvenido de vuelta, " + ingreseSuNombre + " =D ");

// ! 7. Cálculo de Área: Pide al usuario el radio de un círculo y calcula su área (π * radio^2).

let ingreseUnRadio = prompt ("Porfavor ingresa un radio para calcular el area del circulo");

ingreseUnRadio = parseFloat(ingreseUnRadio);

let AreaCirculo = ( Math.PI * Math.pow(ingreseUnRadio, 2));
console.log(AreaCirculo);;

alert(` el area del circulo itilizando el ${ingreseUnRadio} es de ${AreaCirculo}` );

// ! 8. Conversión de Unidades: Pide al usuario una temperatura en grados Celsius y conviértela a Fahrenheit.

let ingreseTemperatura = prompt( "Porfavor ingrese la temperatura que desea transformar de Celsius a Fahrenheit.");
// formula a utlizar para transformar Fórmula	(0 °C × 9/5) + 32 = 32 °F

ingreseTemperatura = parseFloat(ingreseTemperatura);

let fahrenheit = ((ingreseTemperatura * 9/5) + 32);
console.log(fahrenheit);

alert(`La temperatura transformada a fahrenheit es de:  ${fahrenheit}`);


// !9. Cálculo de Promedio: Pide al usuario tres números y calcula su promedio.

let number1 = prompt("ingrese primer digito para calcular promedio");
let number2 = prompt("ingrese segundo digito para calcular promedio");
let number3 = prompt("ingrese tercer digito para calcular promedio");

number1 = parseFloat(number1);
number2 = parseFloat(number2);
number3 = parseFloat(number3);


let resultadoPromedioDeTresDigitos = ( number1 +  number2 + number3 ) / 3;
console.log(resultadoPromedioDeTresDigitos);


alert( `el promedio de los numeros es de: ${resultadoPromedioDeTresDigitos}`);


//! 10. Operador Ternario: Utiliza el operador ternario para determinar si un número es positivo o negativo.

const numeroPoN = -2;
const mensaje1 = numeroPoN >= 0 ? "positivo" : "negativo";
console.log(mensaje1);


// !11. Condicional if-else: Pide al usuario su edad y determina si es mayor o menor de edad.

let ingreseEdad = prompt("Ingrese su edad, para verificar si es mayor de edad");
let resultadoEdad;

if(ingreseEdad >=18 ){
  resultadoEdad = "Eres mayor de edad"
} else {
  resultadoEdad = "Eres menor de edad "
};
console.log(resultadoEdad);

alert(resultadoEdad);

// ! 12. Condicional switch: Pide al usuario un número del 1 al 7 y muestra el día de la semana correspondiente.// Pedir al usuario que ingrese un número del 1 al 7


let numeroDia = prompt("Ingresa un numero del 1 al 7 para obtener el día de la semana:");

numeroDia = parseFloat(numeroDia);

let diaDeSemana;

switch (numeroDia) {
    case 1: diaDeSemana = "Lunes"; break;
    case 2: diaDeSemana = "Martes"; break;
    case 3: diaDeSemana = "Miercoles"; break;
    case 4: diaDeSemana = "Jueves"; break;
    case 5: diaDeSemana = "Viernes"; break;
    case 6: diaDeSemana = "Sabado"; break;
    case 7: diaDeSemana = "Domingo"; break;
    default: diaDeSemana = "error; favor ingresa un número del 1 al 7";

  console.log(diaDeSemana)
}

alert(`el dia de la semana correspondiente es ${diaDeSemana}`)
