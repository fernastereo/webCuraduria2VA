<?php
// Mostrar errores para depuración
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Incluir PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Configurar destino
$asunto = 'Solicitud de contacto';

// Obtener datos del formulario y validar
$nombre = filter_var(trim($_POST["name"]));
$correo = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
$phone = filter_var(trim($_POST["phone"]));
$mensaje = filter_var(trim($_POST["message"]));
list($micro, $sec) = explode(' ', microtime());
$milisegundos = floor($micro * 1000); // Convertir a milésimas
$radicado = 'CUV2-' . date('YmdHis') . $milisegundos;


// Verificar que el correo sea válido antes de continuar
if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
    die('Correo inválido. Por favor, revisa los datos e inténtalo de nuevo.');
}

// Preparar el contenido del correo
$contenido = "Nombre: " . $nombre . 
             "\nCorreo: " . $correo . 
             "\nTeléfono: " . $phone . 
             "\nMensaje: " . $mensaje.
			 "\nRadicado: " . $radicado;

// Crear instancia de PHPMailer
$mail = new PHPMailer(true);
try {
    // Configuración del servidor SMTP
    $mail->isSMTP();
    $mail->Host = 'smtp.hostinger.com'; // Cambia esto por el servidor SMTP de Hostinger
    $mail->SMTPAuth = true;
    $mail->Username = 'curadurianumero2@curaduria2valledupar.com'; // Tu dirección de correo
    $mail->Password = 'Curaduria5087825-2'; // Tu contraseña
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Usa 'ssl' si el puerto es 465
    $mail->Port = 587; // Cambia a 465 si usas 'ssl'

    // Remitente y destinatario
    $mail->setFrom('curadurianumero2@curaduria2valledupar.com', 'Curaduria 2 Valledupar');
    $mail->addAddress('Curadurianumero2@hotmail.es', 'Prueba');

    // Contenido del correo
    $mail->isHTML(false); // Cambiar a true si quieres enviar HTML
    $mail->Subject = $asunto;
    $mail->Body    = $contenido;

    // Enviar el correo
    $mail->send();
    echo 'El mensaje ha sido enviado';

    // Generar número de radicad
    // Preparar respuesta automática
    $respuestaAsunto = 'Respuesta a su solicitud';
    $respuestaContenido = "Gracias por contactarnos. Su número de radicado es: " . $radicado;

    // Configurar PHPMailer para la respuesta automática
    $respuestaMail = new PHPMailer(true);
    $respuestaMail->isSMTP();
    $respuestaMail->Host = 'smtp.hostinger.com';
    $respuestaMail->SMTPAuth = true;
    $respuestaMail->Username = 'curadurianumero2@curaduria2valledupar.com'; // Tu dirección de correo
    $respuestaMail->Password = 'Curaduria5087825-2'; // Tu contraseña
    $respuestaMail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; 
    $respuestaMail->Port = 587;

    // Remitente y destinatario de la respuesta
    $respuestaMail->setFrom('curadurianumero2@curaduria2valledupar.com', 'Curaduria 2 Valledupar');
    $respuestaMail->addAddress($correo, $nombre); // Envía a la dirección del remitente original

    // Contenido del correo de respuesta
    $respuestaMail->isHTML(false);
    $respuestaMail->Subject = $respuestaAsunto;
    $respuestaMail->Body = $respuestaContenido;

    // Enviar la respuesta
    $respuestaMail->send();
    echo 'Respuesta automática enviada con el número de radicado: ' . $radicado;

} catch (Exception $e) {
    echo "El mensaje no pudo ser enviado. Error: {$mail->ErrorInfo}";
}
?>