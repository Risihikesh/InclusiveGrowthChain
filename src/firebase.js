// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2N1TGuvOhjZHhjjfGJVc5AG2tpk2oxRo",
  authDomain: "iclusive-4e760.firebaseapp.com",
  projectId: "iclusive-4e760",
  storageBucket: "iclusive-4e760.appspot.com",
  messagingSenderId: "199857794496",
  appId: "1:199857794496:web:4920a8bf39c999e1f5ac25"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
setPersistence(auth, browserLocalPersistence);
export { db };
