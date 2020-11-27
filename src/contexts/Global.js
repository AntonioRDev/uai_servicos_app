import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export default function GlobalProvider({ children }) {
    const [user, setUser] = useState({});
  
    return (
      <GlobalContext.Provider
        value={{
            user,
            setUser
        }}
      >
        {children}
      </GlobalContext.Provider>
    );
  }
  
  export function useGlobal() {
      const { 
        user,
        setUser
      } = useContext(GlobalContext);
      return {
        user,
        setUser
      };
  }