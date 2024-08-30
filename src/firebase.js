// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_EGUlLi-AQCpadHVnY7zrpgCRwLSHGvI",
  authDomain: "hai-messenger-4f988.firebaseapp.com",
  projectId: "hai-messenger-4f988",
  storageBucket: "hai-messenger-4f988.appspot.com",
  messagingSenderId: "55319754883",
  appId: "1:55319754883:web:d89ab3b8f1aea4c5d183b6",
  measurementId: "G-K24T3NXJ1B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider, storage};