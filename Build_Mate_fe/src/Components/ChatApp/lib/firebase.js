// D:\Projects\Chat-Window\ChatUsingFireBase\react-firebase-chat\src\lib\firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBb6uUebkuFDsKfAbLkV4kF0kwfK7TI2m0",
  authDomain: "reactchat-e0fe1.firebaseapp.com",
  projectId: "reactchat-e0fe1",
  storageBucket: "reactchat-e0fe1.appspot.com",
  messagingSenderId: "449850328466",
  appId: "1:449850328466:web:0b0522342dd47de50ded4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
