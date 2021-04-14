import React, { useState, useEffect } from "react";
import { database } from ".";

import { auth } from "./firebaseConfig";

// Create Auth Context
export const AuthContext = React.createContext();

// Create Auth Context Provider
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(true);
  const logout = () => auth.signOut();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const {
          uid,
          displayName,
          email,
          metadata,
          photoURL,
          phoneNumber,
        } = user;
        const userData = {
          uid,
          displayName,
          email,
          metadata,
          photoURL,
          phoneNumber,
          lastUpdated: new Date().toString(),
        };
        database.ref(`Users/${uid}`).set(userData);
        setCurrentUser(userData);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
