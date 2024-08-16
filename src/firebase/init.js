// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA-yd0pI1Em1GrjV8u7pAQ_zUaT_rLq3Ik",
    authDomain: "literature-da573.firebaseapp.com",
    projectId: "literature-da573",
    storageBucket: "literature-da573.appspot.com",
    messagingSenderId: "481951887249",
    appId: "1:481951887249:web:36add742286c563db1f430",
    measurementId: "G-34ZTZY074F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);