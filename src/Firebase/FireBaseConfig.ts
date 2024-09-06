import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBmCHeh9PNmT1TxS8H2phhydfSqN8-gqVM",
    authDomain: "netflix-clone-6f71f.firebaseapp.com",
    projectId: "netflix-clone-6f71f",
    storageBucket: "netflix-clone-6f71f.appspot.com",
    messagingSenderId: "287651197447",
    appId: "1:287651197447:web:69ab09eb5dfd173f6b70a2",
    measurementId: "G-2PTEHQH3E2"
  };

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);
export const db = getFirestore();

export const favMovieRef=collection(db,'FavoriteMovies')