import React, { createContext, useContext, useState } from "react";

const RegisterContext = createContext();

export default function RegisterProvider({ children }) {
  const [step, setStep] = useState(1);

  return (
    <RegisterContext.Provider
      value={{
        step,
        setStep,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
}

export function useRegister() {
    const { step, setStep } = useContext(RegisterContext);
    return {
        step,
        setStep
    };
}
