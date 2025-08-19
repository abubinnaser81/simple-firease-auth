// donot share firebase config online

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGKZNnN480_d45FCBafAT3MukvCMkb6KU",
  authDomain: "simple-firease-auth.firebaseapp.com",
  projectId: "simple-firease-auth",
  storageBucket: "simple-firease-auth.firebasestorage.app",
  messagingSenderId: "711436659278",
  appId: "1:711436659278:web:93c3eb9bc27bdb461bf11f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);