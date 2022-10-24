import React, { createContext, useState } from "react";
import { app } from "../../firebase";
import { getAuth } from "firebase/auth";

const auth = getAuth(app);
export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({ displayName: "Arafat" });
  const [loading, setLoading] = useState(true);

  



  const userInfo = { user, setUser, loading, setLoading };
  return (
    <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default UserContext;
