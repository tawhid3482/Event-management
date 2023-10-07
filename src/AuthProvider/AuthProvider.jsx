import {
    GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";

export const authContext = createContext(null);
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading,setLoading]=useState(true)


const googleLogin =()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
}

  const createUserByEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  
  const loginbyEmail=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }

  const userinfo =(name,photo)=>{
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName:name, photoURL: photo
    })
  }

  const emailVarify = ()=>{
    return sendEmailVerification(auth.currentUser)
  }
  useEffect(()=>{
    const Unsubcribe = onAuthStateChanged(auth, (user)=>{
        setUser(user)
        setLoading(false)
    })
    return ()=>{
        Unsubcribe();
    }
  },[])

  const logout =()=>{
    return signOut(auth)
  }

  const authInfo = {
    createUserByEmail,
    user,
    loading,
    googleLogin,
    logout,
    loginbyEmail,
    emailVarify,
    userinfo
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
