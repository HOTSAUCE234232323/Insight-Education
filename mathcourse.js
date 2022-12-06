import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
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
ref.on('value', function(snapshot){
    snapshot.array.forEach(function(childSnapshot) {
        var data = childSnapshot.val();
        document.getElementById("chats").innerHTML = data.chat;
        document.getElementById("chats").innerHTML = data.username;
    });
})
document.getElementById("chattextsubmit").onclick = function(){
    const db = getDatabase();
    var chat = document.getElementById("chattext").value;
    set(ref(db, 'chats/'), {
      chat: chat
    });
  }