import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCSXxXKEC_RQDbkyg5hcfdaylR_nlqpAqk",
    authDomain: "netflix-clone-6f89d.firebaseapp.com",
    projectId: "netflix-clone-6f89d",
    storageBucket: "netflix-clone-6f89d.appspot.com",
    messagingSenderId: "401069590641",
    appId: "1:401069590641:web:54fd408095daa2107cb3d0",
    measurementId: "G-V85HG4470J"
};
  

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);