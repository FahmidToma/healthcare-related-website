import { getAuth, signInWithPopup, GoogleAuthProvider, signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const useFirebase = () =>{
    const [users,setUsers] =useState({});
    const auth = getAuth();

    const signInGoogle= () =>{
        const goolgleProvider = new GoogleAuthProvider();
        signInWithPopup(auth,goolgleProvider)
        .then(result =>{
            setUsers(result.user);
        });
    }

    //user state change
    useEffect(() =>{
        onAuthStateChanged(auth, user =>{
            if(user){
                setUsers(user);
            }
            else{
                setUsers({})
            }
        });
        return;
    },[])

    const logOut= () =>{
        signOut(auth)
        .then(() =>{})
    }
    return{
        users,
        signInGoogle,
        logOut
    }
}
export default useFirebase;