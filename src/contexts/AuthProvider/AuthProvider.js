import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useEffect } from 'react';
export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const signInWithProvider = (provider) => {
    setLoading(true)
    return signInWithPopup(auth, provider)
  }

  const createUserRegister = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signInWithEmailPass = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  }

  const logOut = () => {
    localStorage.removeItem('access-token');
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    })
    return () => unsubscribe();
  }, [])

  const authInfo = { user, setUser, loading, setLoading, signInWithProvider, createUserRegister, signInWithEmailPass, updateUserProfile, logOut };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;