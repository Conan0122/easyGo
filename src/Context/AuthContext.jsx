import { createContext, useState, useEffect } from "react";
import { auth } from "../Firebase/firebaseConfig";

// Create the context
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);  // To store user information
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // To store login status

  // Monitor auth state:- this is done using firebase's onAuthStateChange which monitors every status from user.
  useEffect( ()=>{
    const unsubscribe = auth.onAuthStateChanged(currentUser =>{
      setUserData(currentUser)
      // Why !!
      // console.log(currentUser);      // { name: 'Alice' }  --> Object (truthy)
      // console.log(!!currentUser);    // true, if its null then it shows false instead of null
      setIsLoggedIn(!!currentUser)  // Set login status based on current user status
      console.log(`Console from useEffect: ${currentUser.email}`);
    });
    return ()=> unsubscribe();  // Cleanup on unmount
  },[]);

  
  return (
    <AuthContext.Provider value={{ userData, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};