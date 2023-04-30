import React, { createContext, useContext, useEffect, useReducer } from "react";
import { AuthReducer, initialState } from "./reducer";

// 1. Create contextnya
const AuthStateContext = createContext();
const AuthDispatchContext = createContext();


// 2. bikin custom hook untuk consume isi contextnya : (misal loading, user, error message, dll)
//----2.1 untuk consume value
export function useAuthState() {
  const context = useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error("useAuthState must be used within an AuthProvider");
  }
  return context;
}
//----2.2 untuk akses function dispatch nya
export function useAuthDispatch() {
  const context = useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error("useAuthDispatch must be used within an AuthProvider");
  }
  return context;
}



export const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducer(AuthReducer, initialState);
    // user kalau di-console log akan return sebuah object
    
  return (
    <AuthStateContext.Provider value={user}> 
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};
