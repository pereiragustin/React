
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyCwrwHmiqXZmAj_CI197qb5kWWhCx4JaM0",
  authDomain: "rj-proyectofinal.firebaseapp.com",
  projectId: "rj-proyectofinal",
  storageBucket: "rj-proyectofinal.appspot.com",
  messagingSenderId: "711368866086",
  appId: "1:711368866086:web:81a78ed25e204a0dd0e9e7"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
