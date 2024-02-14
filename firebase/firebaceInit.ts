// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDQ7iTPiBRuQYrlCY6xQQWUXuy2aHNa7E",
  authDomain: "pizzashop-a3b61.firebaseapp.com",
  projectId: "pizzashop-a3b61",
  storageBucket: "pizzashop-a3b61.appspot.com",
  messagingSenderId: "154849594656",
  appId: "1:154849594656:web:f78e4bd47011a2c6565b45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);