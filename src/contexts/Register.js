import React, { createContext, useContext, useState } from "react";

const RegisterContext = createContext();

export default function RegisterProvider({ children }) {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [bDate, setBDate] = useState(new Date());
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <RegisterContext.Provider
      value={{
        step,
        setStep,
        email, 
        setEmail, 
        password, 
        setPassword,
        name,
        setName,
        cpf,
        setCpf,
        rg,
        setRg,
        bDate,
        setBDate,
        gender,
        setGender,
        address,
        setAddress,
        phone,
        setPhone
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
}

export function useRegister() {
    const { 
      step, 
      setStep,         
      email, 
      setEmail, 
      password, 
      setPassword,
      name,
      setName,
      cpf,
      setCpf,
      rg,
      setRg,
      bDate,
      setBDate,
      gender,
      setGender,
      address,
      setAddress,
      phone,
      setPhone 
    } = useContext(RegisterContext);
    return {
        step,
        setStep,
        email, 
        setEmail, 
        password, 
        setPassword,
        name,
        setName,
        cpf,
        setCpf,
        rg,
        setRg,
        bDate,
        setBDate,
        gender,
        setGender,
        address,
        setAddress,
        phone,
        setPhone
    };
}
