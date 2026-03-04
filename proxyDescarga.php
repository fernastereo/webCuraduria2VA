<?php
$api_url = 'https://api.curaduria2valledupar.com/api.php?tabla=UploadDocu';
$response = file_get_contents($api_url);
header('Content-Type: application/json');
echo $response;
?>