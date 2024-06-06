// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZAANyMJCY0pth73qvSIGrhLblSEFhrsk",
  authDomain: "login-app-9ac10.firebaseapp.com",
  databaseURL: "https://login-app-9ac10-default-rtdb.firebaseio.com",
  projectId: "login-app-9ac10",
  storageBucket: "login-app-9ac10.appspot.com",
  messagingSenderId: "628506710160",
  appId: "1:628506710160:web:f165fb7b1bc634f442c815"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, signInWithEmailAndPassword, onAuthStateChanged, signOut, doc, setDoc, getDoc };