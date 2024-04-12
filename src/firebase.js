// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv6zW1MvYxNum-PgRxBlupwG2Xfnala6s",
  authDomain: "react-firebase-tailwind-d41bf.firebaseapp.com",
  projectId: "react-firebase-tailwind-d41bf",
  storageBucket: "react-firebase-tailwind-d41bf.appspot.com",
  messagingSenderId: "467519601531",
  appId: "1:467519601531:web:e391c8cda93b5172111bde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);