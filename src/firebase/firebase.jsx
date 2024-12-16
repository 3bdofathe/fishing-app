// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLv3mV6_z3tP3gdvUgswRVLxAV_ykp-kg",
  authDomain: "fishing-app-91478.firebaseapp.com",
  projectId: "fishing-app-91478",
  storageBucket: "fishing-app-91478.firebasestorage.app",
  messagingSenderId: "1074926165715",
  appId: "1:1074926165715:web:fd11bf119a751ac090be26",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
