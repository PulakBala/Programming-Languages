import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';
 
export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const providerLogin = (provider) =>{
        return signInWithPopup(auth, provider);
    }

    const createUser =(email, password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        return signOut(auth);
    }

    const updateUserProfile =(profile)=>{
        return updateProfile(auth.currentUser, profile)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (curretnUser)=>{
             console.log('inside state change', curretnUser);
                 setUser(curretnUser)
         })
         return () =>{
             unsubscribe();
         }
     },[])

    const authInfo = {user,loading, updateUserProfile, setLoading, logOut, signIn, providerLogin, createUser}

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;