// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOTo7EfUnFWMPVMgIApKD-j3IOLB8MD6Q",
  authDomain: "event-empire-f7d28.firebaseapp.com",
  projectId: "event-empire-f7d28",
  storageBucket: "event-empire-f7d28.appspot.com",
  messagingSenderId: "541388990964",
  appId: "1:541388990964:web:bf1a916fb0f665e280b1a1",
  measurementId: "G-GPZLMFSCBN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);