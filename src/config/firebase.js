// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBrekFXUBdvyVac2V_uNdYTyIOaNrAX4jk",
    authDomain: "fir-1800-5b33a.firebaseapp.com",
    projectId: "fir-1800-5b33a",
    storageBucket: "fir-1800-5b33a.firebasestorage.app",
    messagingSenderId: "108220104098",
    appId: "1:108220104098:web:8113a9f0ab7b24dded06fb",
    measurementId: "G-P33YPTZ0SR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { analytics, auth }