import { create } from "domain";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyAgtTRkf1smT1GQ4g-CfZ43TSTZV15MAic",
  authDomain: "educationwebsite-baaf8.firebaseapp.com",
  projectId: "educationwebsite-baaf8",
  storageBucket: "educationwebsite-baaf8.appspot.com",
  messagingSenderId: "294364177449",
  appId: "1:294364177449:web:c49f7ca554f59d9cf62838",
  measurementId: "G-T7GVZ0XP5G"
});
document.getElementById("SignUp").onclick = function(){
    const auth = getAuth();
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}