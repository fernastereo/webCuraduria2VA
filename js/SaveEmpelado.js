function Save(n) {
    debugger;
    var nombre = $('#exampleInputName1').val();
    var Tipo = $('#exampleSelectGender').val();
    var comentario = $('#exampleTextarea1').val();
    var archivoInput = document.getElementById('FileID');
    var archivo = archivoInput.files[0];
    var formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('Tipo', Tipo);
    formData.append('comentario', comentario);
    formData.append('archivo', archivo);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "../../../CargueArchivos.asmx/CargarDatos", false);
    xhr.onreadystatechange = function () {
        if (xhr.status === 200) {
            alert("Archivo guardado con éxito");
            // Manejar la respuesta del servidor aquí
        } else {
            alert("Error al guardar el archivo");
        }
    };
    xhr.send(formData);


    //$.ajax({

    //    type: 'POST',
    //    url: '../../../CargueArchivos.asmx/CargarDatos',
    //    data: null,
    //    contentType: "application/json; charset=utf-8",
    //    dataType: "json",
    //    success: function (response) {
    //        debugger;
    //        alert(response.d);
    //    },
    //    error: function (xhr, status, error) {
    //        console.error('Error:', error);
    //    }
    //});


}