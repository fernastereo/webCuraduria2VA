<!DOCTYPE html>
<html>
<head>
    <title>Llamada a Servicio Web ASMX con AJAX</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script>
        $(document).ready(function () {
            $('#btnLlamarServicio').click(function () {
                var parametro = $('#txtParametro').val();

                $.ajax({    
                    type: "POST",
                    url: "Default.aspx/MiMetodo",
                    data: parametro ,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (response) {
                        $('#resultado').text(response.d);
                    },
                    error: function (xhr, status, error) {
                        console.error(xhr.responseText);
                    }
                });
            });
        });
    </script>
</head>
<body>
    <input type="text" id="txtParametro" />
    <button id="btnLlamarServicio">Llamar Servicio</button>
    <div id="resultado"></div>
</body>
</html>