
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0PeueRki6uB7SQc6BM3vPZK07T4kyrBg",
    authDomain: "listwebstorage.firebaseapp.com",
    databaseURL: "https://listwebstorage-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "listwebstorage",
    storageBucket: "listwebstorage.appspot.com",
    messagingSenderId: "285250545705",
    appId: "1:285250545705:web:5a0a05efeb875796c59438"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



import {getDatabase, ref, get, set, child, update, remove}
from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js"//Copy and Paste the URL from near the top of the CDN you pasted in from firebase
// (the one where you imported "initializeApp" from),
//but change "firebase-app" to "firebase-database"


const db = getDatabase();

var enterUsername = document.querySelector("#enterUsername");
var enterPassword = document.querySelector("#enterPassword");
//var enterAge = document.querySelector("#enterAge");
var findID = document.querySelector("#findID");
var findPassword = document.querySelector("#findPassword");
//var findAge = document.querySelector("#findAge");


var insertBtn = document.querySelector("#insert");
var updateBtn = document.querySelector("#update");
var removeBtn = document.querySelector("#remove");
var findBtn = document.querySelector("#find");

function InsertData() {
    set(ref(db, "Accounts/"+ enterUsername.value),{
        Password: enterPassword.value,
        ID: enterUsername.value,
        //Age: enterAge.value
    })
    .then(()=>{
        alert("Account added successfully");
    })
    .catch((error)=>{
        alert(error);
    });
}

function FindData() {
    const dbref = ref(db);

    get(child(dbref, "Accounts/" + findID.value))
    .then((snapshot)=>{
        if(snapshot.exists()){
            findPassword.innerHTML = "Password: " + snapshot.val().Password;
            //findAge.innerHTML = "Age: " + snapshot.val().Age;
        } else {
            alert("No account found");
        }
    })
    .catch((error)=>{
        alert(error)
    })
    
}

function UpdateData(){
    update(ref(db, "Accounts/"+ enterUsername.value),{
        Password: enterPassword.value,
        //Age: enterAge.value
    })
    .then(()=>{
        alert("Account updated successfully");
    })
    .catch((error)=>{
        alert(error);
    });
}

function RemoveData(){
    remove(ref(db, "Accounts/"+ enterUsername.value))
    .then(()=>{
        alert("Account deleted successfully");
    })
    .catch((error)=>{
        alert(error);
    });
}

insertBtn.addEventListener('click', InsertData);
updateBtn.addEventListener('click', UpdateData);
removeBtn.addEventListener('click', RemoveData);
findBtn.addEventListener('click', FindData);