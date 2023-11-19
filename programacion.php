<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userEmail = $_POST["email"];
    $message = $_POST["message"];
    $recipientEmail = "gerson.salab02@gmail.com"; // Dirección de correo preestablecida

    $to = $recipientEmail;
    $subject = "Nuevo mensaje desde el sitio web";
    $headers = "From: $userEmail";

    if (mail($to, $subject, $message, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}
?>








<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $telefono = $_POST["telefono"];
    $fecha = $_POST["fecha"];
    $hora = $_POST["hora"];

    // Correo de destino
    $to = 'castellanoj914@gmail.com';

    // Asunto del correo
    $subject = 'Reserva de Cita';

    // Cuerpo del correo
    $message = "Nombre: $nombre\nCorreo Electrónico: $email\nTeléfono: $telefono\nFecha: $fecha\nHora: $hora";

    // Cabeceras del correo
    $headers = 'From: ' . $email . "\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    // Enviar el correo
    if (mail($to, $subject, $message, $headers)) {
        echo 'Correo enviado correctamente';
    } else {
        echo 'Error al enviar el correo. Verifica la configuración del servidor de correo.';
    }
} else {
    echo 'Acceso no permitido';
}
?>


