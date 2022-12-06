import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js';
import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js';
const firebaseApp = initializeApp({
    apiKey: "AIzaSyAgtTRkf1smT1GQ4g-CfZ43TSTZV15MAic",
    authDomain: "educationwebsite-baaf8.firebaseapp.com",
    databaseURL: "https://educationwebsite-baaf8-default-rtdb.firebaseio.com",
    projectId: "educationwebsite-baaf8",
    storageBucket: "educationwebsite-baaf8.appspot.com",
    messagingSenderId: "294364177449",
    appId: "1:294364177449:web:d4a3c2289dfd00aaf62838",
    measurementId: "G-BPJNEGT14V"
});
document.getElementById("SignUp").onclick = function(){
    const auth = getAuth();
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;
    var username = document.getElementById("username").value;
    const db = getDatabase();
    set(ref(db, 'usernames/'), {
      username: username
    });
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        location.assign("mathcourse.html")
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}