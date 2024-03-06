// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbvxXmSVDuM_YtyN-NU7E2mEuo0-NXemY",
  authDomain: "test-acb86.firebaseapp.com",
  projectId: "test-acb86",
  storageBucket: "test-acb86.appspot.com",
  messagingSenderId: "656206972719",
  appId: "1:656206972719:web:90b197b483989e848503da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);