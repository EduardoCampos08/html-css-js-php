<?php
//llamamos a los campos
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];

//datos para el correo
$destinatario="lalitopro19@gmail.com";
$asunto="Conctacto de nuestra web";

$carta="De: $nombre \n";
$carta .="Correo: $correo \n";
$carta .="Telefono: $telefono \n";
$carta .="Mensaje: $mensaje";

//enviar el correo
mail($destinatario,$asunto,$carta);





?>

