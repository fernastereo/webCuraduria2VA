<?php
$api_url = 'https://apicu.curaduria2valledupar.com/api.php?tabla=noticias';
$response = file_get_contents($api_url);
header('Content-Type: application/json');
echo $response;
?>