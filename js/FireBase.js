import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDaz9Z1qg8m9jbl_p4tKMTFaPhKM9WHpf0",
    authDomain: "curaval-22fb1.firebaseapp.com",
    projectId: "curaval-22fb1",
    storageBucket: "curaval-22fb1.appspot.com",
    messagingSenderId: "914886197863",
    appId: "1:914886197863:web:4b905ceedad57790534ac2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export class ManageAccount {
    register(email, password) {
        createUserWithEmailAndPassword(auth, email, password)
            .then((_) => {
                window.location.href = "login.html";
                // Mostrar alerta de registro exitoso
                alert("Registro exitoso. Serás redirigido a la página de inicio de sesión.");
            })
            .catch((error) => {
                console.error(error.message);
                // Mostrar alerta de error de registro
                alert("Error al registrar: " + error.message);
            });
    }

    authenticateEmail(email, password) {
        signInWithEmailAndPassword(auth, email, password)
            .then((userData) => {
                sessionStorage.setItem('clave', 'xcdgxwpyc2');
                window.location.href = "https://localhost:44384/demo_1/Admin.html";
                // Mostrar alerta de inicio de sesión exitoso
                alert("Has iniciado sesión correctamente. Serás redirigido a la página principal.");
            })
            .catch((error) => {
                console.error(error.message);
                // Mostrar alerta de error de inicio de sesión
                alert("Error al iniciar sesión: " + error.message);
            });
    }

    signOut() {
        signOut(auth)
            .then((_) => {
                window.location.href = "index.html";
            })
            .catch((error) => {
                console.error(error.message);
            });
    }


    authenticate(username, password) {
        debugger;
        const appS = initializeApp(firebaseConfig);
        // Perform authentication logic here, such as checking credentials against a database
        // Example: (Replace this with your actual authentication logic)
        const db = appS.database();
        const ref = appS.database().ref(`Usuarios/${username}`);

        ref.once('value', (snapshot) => {
            const userData = snapshot.val();
            if (userData) {
                // Usuario encontrado, verificar la contraseña
                if (userData.password === password) {
                    appS.createCustomToken(username)
                        .then((customToken) => {
                            // Sign in the user with the custom token
                            if (appS().signInWithCustomToken(customToken)) {
                                sessionStorage.setItem('clave', customToken);
                                alert("Credenciales incorrectas");
                                window.location.href = "http://curaduria2valledupar.co/demo_1/Admin.html";
                            }
                           

                        })
                        .then((userCredential) => {
                            // User signed in successfully
                            console.log('User signed in:', userCredential.user.uid);
                        })
                        .catch((error) => {
                            // Handle errors
                            console.error('Custom authentication failed:', error);
                        });
                    console.log('Las credenciales son válidas');
                } else {
                    console.log('Contraseña incorrecta');
                }
            } else {
                console.log('Usuario no encontrado');
            }
        }).catch((error) => {
            console.error('Error al verificar las credenciales:', error);
        });

    }
}