// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvoB2SbzLS48JC11xB_sgEJxGnGzhNxlc",
  authDomain: "cv-cover-letter.firebaseapp.com",
  projectId: "cv-cover-letter",
  storageBucket: "cv-cover-letter.appspot.com",
  messagingSenderId: "727574477926",
  appId: "1:727574477926:web:2b2d71933c247a930a01a7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
