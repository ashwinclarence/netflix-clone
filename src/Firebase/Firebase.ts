import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./FireBaseConfig";


export const signNewUser = async(username:string, password:string):Promise<boolean> => {
    const newUser = await createUserWithEmailAndPassword(auth, username, password);
    if (newUser) return true
    
    return false;
}
  

export const loginExistingUser = async (username: string, password: string): Promise<boolean> => {
    const existingUser = await signInWithEmailAndPassword(auth, username, password);

    if (existingUser) {
        return true
    }

    return false;
}


// check the user session 
export const checkUserSession = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) return true;
        
        return false;
    })
}