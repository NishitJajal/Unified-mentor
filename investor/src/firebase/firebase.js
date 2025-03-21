// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3e_U5gU3A0wMdXSOW8SLADp8UXXXXXXX",
  authDomain: "investor-connect-XXXXX.firebaseapp.com",
  projectId: "investor-connect-XXXXX",
  storageBucket: "investor-connect-XXXXX.firebasestorage.app",
  messagingSenderId: "4697124XXXXX",
  appId: "1:469712438427:web:5dcdc981f8d9f34081f23e",
  measurementId: "G-WGVHG67K7R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export {auth, db};
