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
  apiKey: "AIzaSyCQbrMQE7D7bWA_zV4hUjmsY1i0iPVC11o",
  authDomain: "inclusiveecommerce.firebaseapp.com",
  projectId: "inclusiveecommerce",
  storageBucket: "inclusiveecommerce.appspot.com",
  messagingSenderId: "809783757448",
  appId: "1:809783757448:web:de7d376166d341f1f5ad3d"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
setPersistence(auth, browserLocalPersistence);
export { db };
