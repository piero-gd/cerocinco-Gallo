// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZk8C_q51cvVtUdva0YE8xtWFu8rgw7jc",
  authDomain: "coderhouse-cerocinco.firebaseapp.com",
  projectId: "coderhouse-cerocinco",
  storageBucket: "coderhouse-cerocinco.appspot.com",
  messagingSenderId: "476681739006",
  appId: "1:476681739006:web:42b1917da97eee328fe3af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exportar la base de datos para usarla en la app
export const db = getFirestore(app)