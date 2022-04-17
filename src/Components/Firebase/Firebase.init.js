// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD3UqC--Eb8cxf5edMe6lpByqTwqfZEbbU",
    authDomain: "doctreat-8c463.firebaseapp.com",
    projectId: "doctreat-8c463",
    storageBucket: "doctreat-8c463.appspot.com",
    messagingSenderId: "896956342456",
    appId: "1:896956342456:web:0d3b452b09c70ce1bd544d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;