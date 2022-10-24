import React, { createContext, useEffect, useState } from "react";
import { app } from "../../firebase";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);
export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({ });
  const [loading, setLoading] = useState(true);

  
  const createUser = (email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
const userLogin = (email, password) =>{
  setLoading(true)
  return signInWithEmailAndPassword(auth, email, password)
}

useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
    setLoading(false)
    setUser(currentUser)
  })
  return ()=>{
    unsubscribe()
  }
},[])





  const userInfo = { user, setUser, loading, setLoading,createUser,userLogin };
  return (
    <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default UserContext;
