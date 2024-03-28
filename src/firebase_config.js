// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from  'firebase/firestore'
import {getStorage} from 'firebase/storage'
import SignIn from "./pages/SignIn";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPf0o9DLFJmNZQsBdhgF-zB6r6TljfnWw",
  authDomain: "smartdict-b054d.firebaseapp.com",
  projectId: "smartdict-b054d",
  storageBucket: "smartdict-b054d.appspot.com",
  messagingSenderId: "813207595122",
  appId: "1:813207595122:web:881e455bd93e376a22faeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage(app)