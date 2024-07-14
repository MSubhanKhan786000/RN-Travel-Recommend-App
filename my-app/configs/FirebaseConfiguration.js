// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAdWYGsghkiBKaYkdVEpYPmVdGT0AhxF3s",
    authDomain: "rn-projects-abe65.firebaseapp.com",
    projectId: "rn-projects-abe65",
    storageBucket: "rn-projects-abe65.appspot.com",
    messagingSenderId: "1042709728867",
    appId: "1:1042709728867:web:ebf7619a40ef09591cb256",
    measurementId: "G-J3TVLYFDL9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
