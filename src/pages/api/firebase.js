// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjxoo4c-9ENziqYsluKqUnxWXmRkOYfsU",
  authDomain: "nextjs-auth-42dba.firebaseapp.com",
  projectId: "nextjs-auth-42dba",
  storageBucket: "nextjs-auth-42dba.appspot.com",
  messagingSenderId: "688433440817",
  appId: "1:688433440817:web:7e0288399cb5d894e50d10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export {auth, db};