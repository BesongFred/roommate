// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsHNRP9TdymEhzOewgH8RS_h1BTCIYRr0",
  authDomain: "roommate-finder-203e0.firebaseapp.com",
  projectId: "roommate-finder-203e0",
  storageBucket: "roommate-finder-203e0.firebasestorage.app",
  messagingSenderId: "402425976808",
  appId: "1:402425976808:web:70e69137325ed01ef5365d",
  measurementId: "G-M1R2P5XFT2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);