import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import app from '../firebase/firebase.config';
 
const AuthContext = createContext()

const auth = getAuth(app);

const UserContext = ({children}) => {

    const createUser =(email, password)=>{
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {createUser}

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;