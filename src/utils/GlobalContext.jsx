import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { base_url } from "../configs";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from "../firebase/firebase.config";

const API_CONTEXT = createContext();

const GlobalContext = ({ children }) => {
  const auth = getAuth(app);

  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${base_url}/all`);
        setData(response?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        fetchData();
      } finally {
        setLoading(false);
        fetchData();
      }
    };
    if (data?.length === 0 || data === undefined) {
      fetchData();
    }
  }, [data]);

  const signUpUser = async (email, password) => {
    setLoading(true);

    await createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = async (email, password) => {
    setLoading(true);

    await signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const facebookSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, [auth]);

  const contextValue = {
    data,
    setData,
    signUpUser,
    signInUser,
    user,
    loading,
    googleSignIn,
    facebookSignIn,
  };

  return (
    <API_CONTEXT.Provider value={contextValue}>{children}</API_CONTEXT.Provider>
  );
};

export { API_CONTEXT, GlobalContext as default };
