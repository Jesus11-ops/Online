$(document).ready(function () {
  $("#sendMessage").click(function () {
    var message = $("#message").val();
    var recipientEmail = "gerson.salab02@gmail.com"; // Dirección de correo preestablecida
    sendEmail(recipientEmail, message);
  });

  function sendEmail(email, message) {
    var mailtoLink = `mailto:${email}?body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  }
});

/*NOTIFICACION*/
document.getElementById('iconoNotificaciones').addEventListener('click', function () {
  mostrarNotificacion();
});

function mostrarNotificacion() {
  // Obtener el contenedor de notificaciones
  const contenedorNotificaciones = document.getElementById('notificaciones');

  // Crear un elemento de notificación
  const notificacion = document.createElement('div');
  notificacion.className = 'notificacion';

  // Texto de la notificación
  const textoNotificacion = document.createElement('p');
  textoNotificacion.textContent = 'En tu abogado online podemos ayudarte con cualquier inquietud';
  notificacion.appendChild(textoNotificacion);

  // Botón de cierre
  const botonCerrar = document.createElement('button');
  botonCerrar.textContent = 'Cerrar';
  botonCerrar.addEventListener('click', function() {
      cerrarNotificacion(notificacion);
  });
  notificacion.appendChild(botonCerrar);

  // Limpiar el contenedor y añadir la notificación
  contenedorNotificaciones.innerHTML = '';
  contenedorNotificaciones.appendChild(notificacion);

  // Mostrar la notificación
  setTimeout(function() {
      notificacion.classList.add('visible');
  }, 50);

  // Ocultar la notificación después de unos segundos
  setTimeout(function() {
      cerrarNotificacion(notificacion);
  }, 3000); // 3000 milisegundos (3 segundos)
}

function cerrarNotificacion(notificacion) {
  // Ocultar la notificación
  notificacion.classList.remove('visible');

  // Eliminar la notificación después de la animación de cierre
  notificacion.addEventListener('transitionend', function() {
      notificacion.remove();
  });
}


/*GEOLOCALIZACION */   /* nuevo */
document.addEventListener("DOMContentLoaded", function() {
  var map = L.map('map').setView([9.30472, -75.39778], 15);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

  L.marker([9.30472, -75.39778]).addTo(map)
      .bindPopup('Sincelejo-Sucre')
      .openPopup();
});

/*RELOJ*/
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;
  $('#time').text(timeString);
}

$(document).ready(function() {
  updateClock(); // Initial call to set the clock
  setInterval(updateClock, 1000); // Update the clock every second
});

/*RESERVAR CITA*/
$(document).ready(function() {
  $("#abrirModal").click(function() {
      $("#modalReserva").css("display", "block");
  });

  $("#cerrarModal").click(function() {
      $("#modalReserva").css("display", "none");
  });

  $("#enviarCita").click(function() {
      var nombre = $("#nombre").val();
      var email = $("#email").val();
      var telefono = $("#telefono").val();
      var fecha = $("#fecha").val();
      var hora = $("#hora").val();

      $.ajax({
          type: "POST",
          url: "procesar_formulario.php",
          data: {
              nombre: nombre,
              email: email,
              telefono: telefono,
              fecha: fecha,
              hora: hora
          },
          success: function(response) {
              console.log("Formulario enviado exitosamente", response);
              alert("Cita reservada correctamente.");
              $("#modalReserva").css("display", "none");
              $("#formularioReserva")[0].reset();
          },
          error: function(jqXHR, textStatus, errorThrown) {
              console.error("Error al enviar el formulario:", textStatus, errorThrown);
              alert("Error al reservar la cita. Inténtalo de nuevo.");
          }
      });
  });
});


/*CARRUSEL*/
// Configuración para el desplazamiento automático cada 3 segundos
$('.carousel').carousel({
  interval: 3000 // tiempo en milisegundos
});