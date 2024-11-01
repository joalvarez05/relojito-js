
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

  let fechaHtml = document.getElementById("fecha");
  let horaHtml = document.getElementById("hora");
  let fecha = new Date();
  let horas = fecha.getHours().toString().padStart(2, "0");
  let minutos = fecha.getMinutes().toString().padStart(2, "0");
  let segundos = fecha.getSeconds().toString().padStart(2, "0");
  let horaCompleta = `${horas}:${minutos}:${segundos}`;


  fechaHtml.innerHTML = `${dias[fecha.getDay()]} ${fecha
    .getDate()
    .toString()
    .padStart(2, "0")} de ${
    meses[fecha.getMonth()]
  } del ${fecha.getFullYear()}`;

  horaHtml.innerHTML = horaCompleta;
}, 1000);

