import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4tBA_v7iy1Fw6MTdQpsFgxHfeMm_yydk",
  authDomain: "aleduquereact.firebaseapp.com",
  projectId: "aleduquereact",
  storageBucket: "aleduquereact.appspot.com",
  messagingSenderId: "623626763251",
  appId: "1:623626763251:web:9d1971d7d41927de783086"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);