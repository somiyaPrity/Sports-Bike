import { useState, useEffect } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  signOut,
} from 'firebase/auth';
import initializeAuthentication from '../pages/Login/firebase/firebase.init';

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState('');

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  //   get user by email password
  const registerUser = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError('');
        const newUser = { email, displayName: name };
        setUser(newUser);
        // save user
        saveUser(email, name);
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
      })
      .catch((error) => {
        setAuthError(error.message);
      });
  };
  // sign in with google
  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {})
      .catch((error) => {
        const errorMessage = error.message;
        setAuthError(errorMessage);
      });
  };
  // observer user state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unsubscribed;
  }, []);
  // save user to database
  const saveUser = (email, displayName) => {
    const user = { email, displayName };
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then();
  };
  // logout user
  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return { user, authError, signIn, registerUser, logout };
};

export default useFirebase;
