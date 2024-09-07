// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCPgioRarfBFNjRS8eUUkuUN2mk6EJkAHQ",
    authDomain: "cinemaflixgpt.firebaseapp.com",
    projectId: "cinemaflixgpt",
    storageBucket: "cinemaflixgpt.appspot.com",
    messagingSenderId: "447747736921",
    appId: "1:447747736921:web:ae4bc334c70bcf852bb848",
    measurementId: "G-VDVGK9NKCC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);