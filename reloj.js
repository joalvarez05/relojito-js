// // Realizar un codificador de contraseña
// // Realizar una calculadora de IMC, como la que hicimos en python

// function precioTotal(precio, impuesto) {
//   let ivaDiscriminado = (precio * impuesto) / 100;
//   let precioFinal = precio + ivaDiscriminado;
//   return precioFinal;
// }

// // Capturamos el formulario y el botón
// let formulario = document.getElementById("formulario");
// let btnCalcular = document.getElementById("calcular");

// // Agregamos un event listener al botón
// btnCalcular.addEventListener("click", function () {
//   // Obtenemos los valores ingresados por el usuario
//   let precio = parseFloat(document.getElementById("precio").value);
//   let impuesto = parseFloat(document.getElementById("iva").value);

//   // Verificamos que los valores sean números
//   if (!isNaN(precio) && !isNaN(impuesto)) {
//     let resultado = precioTotal(precio, impuesto);

//     // Mostramos el resultado en el DOM
//     document.getElementById(
//       "resultado"
//     ).textContent = `El precio final con IVA es: ${resultado}`;
//   } else {
//     // Si no son números, mostramos un mensaje de error
//     document.getElementById("resultado").textContent =
//       "Por favor, ingrese valores válidos.";
//   }
// });

// /* En este ejercicio vas a pedir al usuario que teclee tres números enteros y el script mostrará como resultado el valor medio de los tres.

// Recuerda que la media de tres números se calcula sumando los tres y dividiendo entre 3. */
// //  Hay que hacer el formulario de inputs en html y tomarlos ahi a los 3 valores.

// const boton = document.getElementById("enviarFormulario");

// boton.addEventListener("click", (event) => {
//   event.preventDefault(); //se usa para evitar que la pagina se recargue cuando se escuche el evento
//   const numero1 = parseInt(document.getElementById("entero1").value);
//   const numero2 = parseInt(document.getElementById("entero2").value);
//   const numero3 = parseInt(document.getElementById("entero3").value);
//   const media = (numero1 + numero2 + numero3) / 3;
//   const texto = document.getElementById("media");
//   texto.textContent = "La media de los 3 números es:" + media;
// });

// /*
// Intercambiar el valor de dos variables.
// La variable 1 debe tener al final el valor de la variable 2.
// No vale usar arrays ni asignación múltiple.
// */

// // asignamos los valores
// let num1 = 10;
// let num2 = 20;
// // declaramos una variable vacía
// let aux;
// // intercambiamos los valores
// aux = num2;
// num2 = num1;
// num1 = aux;
// // mostramos por consola num1 y num2
// console.log(num1);
// console.log(num2);

// /*
// Escribe un script  que {dado un número} {nos devuelva true si es un número par} y {false si es un número impar}.
// */
// const n1 = 5;
// let resto = n1 % 2;
// let par = resto == 0;
// console.log("Es par ? " + par);

// // Este script pide al usuario que teclee una letra entre A, B, C, D. Si pulsa la letra A le dará el mensaje de que ha acertado, en caso contrario le dirá que se equivocó | Lo complicamos un poco: devolverlo por el documento y no por consola ni por alert.

// // const relleno = document.getElementById("rellenar");
// // // const letra = prompt("Ingresa una letra, puede ser a, b, c o d: ");
// // if (letra === "a" || letra === "A") {
// //   relleno.textContent = "Acertaste";
// // } else {
// //   relleno.textContent = "Te equivocaste flaquito! Respuesta incorrecta";
// // }

// // El programa pide al usuario si va a viajar con coche, tren, bicicleta o autobús. Si va en tren o autobus le recordará que lleve dinero para el billete.

// const viajar = document.getElementById("viaje");
// const boton1 = document.getElementById("envio");
// const formulario1 = document.getElementById("miFormulario");

// formulario1.addEventListener("submit", function (event) {
//   event.preventDefault(); // Evita el envío del formulario y la recarga de la página
//   const vehicle = document.getElementById("vehiculo").value;
//   const vehicleMinuscula = vehicle.toLowerCase();
//   // Compara el valor del input con las opciones dadas
//   if (vehicleMinuscula === "tren" || vehicleMinuscula === "autobus") {
//     viajar.textContent =
//       "¡No olvides llevar dinero para el billete! ¡Buen viaje!";
//   } else {
//     viajar.textContent =
//       "¡Disfruta tu viaje! No uses el móvil mientras conduces.";
//   }
// });

// El objetivo de este ejercicio crear un reloj funcional usando el objeto Date() de javascript.

// Aca usamos setInterval para que se repita indefinidamente. El setTimeout es para que se repita solo una vez luego de que se cumpla el tiempo que le pasamos al final.
const relojito = setInterval(() => {
  let meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  let dias = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  // Creamos todas las variables y recuperamos elementos del html
  let fechaHtml = document.getElementById("fecha");
  let horaHtml = document.getElementById("hora");
  let fecha = new Date();
  let horas = fecha.getHours().toString().padStart(2, "0");
  let minutos = fecha.getMinutes().toString().padStart(2, "0");
  let segundos = fecha.getSeconds().toString().padStart(2, "0");
  let horaCompleta = `${horas}:${minutos}:${segundos}`;

  // A las variables recuperadas del HTML le hacemos un INNERHTML que nos permite REEMPLAZAR contenido.
  fechaHtml.innerHTML = `${dias[fecha.getDay()]} ${fecha
    .getDate()
    .toString()
    .padStart(2, "0")} de ${
    meses[fecha.getMonth()]
  } del ${fecha.getFullYear()}`;

  horaHtml.innerHTML = horaCompleta;
}, 1000);

// Si yo quisiera detenerlo hago un setTimeout y le paso un clearInterval con mi relojito como parametro.
// setTimeout(() => {
//   clearInterval(relojito);
//   alert("Intervalo detenido.");
// }, 8000);
