import { ManageAccount } from './FireBase.js';
$(document).ready(function () {

    $(".tab a").on("click", function (e) {

        e.preventDefault();

        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");

        target = $(this).attr("href");

        $(".contenido-tab > div").not(target).hide();

        $(target).fadeIn(600);

    });
    
});


document.getElementById("formulario-sesion").addEventListener("submit", (event) => {
    debugger;
    event.preventDefault();
    debugger;
    var UsuarioL = document.getElementById("loginUsername").value;
    var ContrasenaL = document.getElementById("loginPassword").value;


    const account = new ManageAccount();
    account.authenticateEmail(UsuarioL, ContrasenaL);

});

// function Login(n) {
//    debugger;

//    var UsuarioL = document.getElementById("loginUsername").value;
//    var ContrasenaL = document.getElementById("loginPassword").value;


//    const account = new ManageAccount();
//    account.authenticate(UsuarioL, ContrasenaL);

//    //if (UsuarioL === "" || ContrasenaL === "") {
//    //    $(".loginForm").find("input, textarea").on("keyup blur focus", function (e) {

//    //        var $this = $(this),
//    //          label = $this.prev("input");
    
//    //        if (e.type === "blur") {
//    //            if($this.val() === "") {
//    //                label.removeClass("active highlight"); 
//    //                } else {
//    //                label.removeClass("highlight");                  
//    //                }   
//    //        } 
//    //        if (e.type === "focus") {
//    //            if($this.val() === "") {
//    //                label.removeClass("highlight"); 
//    //            } 
//    //            else if($this.val() !== "") {
//    //                label.addClass("highlight"); 
                    
//    //            }
//    //        }
    
//    //    });
    
//    //    return false; // Evita que el formulario se envíe
//    //}else {
        
//    //    try {
//    //        const response = await fetch('https://localhost:44384/Json/Usuarios.json', {
//    //            method: 'GET'
//    //        });
//    //        const data = await response.json();
//    //        console.log('Datos recibidos:', data); // Esto mostrará los datos recibidos en la consola
//    //        var temp = 0;
//    //        data.forEach(objeto => {
//    //            if (UsuarioL == objeto.Usuario && ContrasenaL == objeto.Contrasena) {
//    //                alert("Ingreso correctamente");
//    //                sessionStorage.setItem('clave', 'xcdgxwpyc2');

//    //                // Obtener datos de la caché
                    
//    //                window.location.href = "https://localhost:44384/demo_1/Admin.html";
//    //            } else if (temp == 1) {
//    //                alert("Credenciales incorrectas");
//    //            } else {
//    //                temp = 1;
//    //            }
//    //        });
//    //    } catch (error) {
//    //        console.error('Error al obtener o procesar los datos:', error);
//    //    }
//    //}
        
   
    
//}
