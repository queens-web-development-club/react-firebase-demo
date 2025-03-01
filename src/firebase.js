// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIgl9IJF0nmvL4agq6t86V6TuiCJMFkQs",
  authDomain: "react-demo-35ee6.firebaseapp.com",
  projectId: "react-demo-35ee6",
  storageBucket: "react-demo-35ee6.firebasestorage.app",
  messagingSenderId: "1008488091073",
  appId: "1:1008488091073:web:1f9ba62b5cedf7e0fab340",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
