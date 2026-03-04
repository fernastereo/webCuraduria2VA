<?php
$filePath = 'http://curaduria2valledupar.co/Json/datos.json';

// Obtener los datos del formulario
$name = "hola";

// Crear un array asociativo con los datos
$dataToWrite = array(
    'name' => $name
    
);

// Convertir el array en formato JSON
$jsonData = json_encode($dataToWrite, JSON_PRETTY_PRINT);

// Escribir en el archivo JSON
try {
    if (file_put_contents($filePath, $jsonData) === false) {
        throw new Exception('Error al escribir en el archivo');
    } else {
        echo 'Datos guardados correctamente en datos.json';
    }
} catch (Exception $e) {
    echo 'Error: ' . $e->getMessage();
}

?>