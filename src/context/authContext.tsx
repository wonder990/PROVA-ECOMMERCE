"use client";
import React, { createContext, useState, useContext, PropsWithChildren } from 'react';

interface authContextData {
  value: string;
  updateValue: (newValue: string) => void;
}

const AuthContext = createContext<authContextData | undefined>(undefined);

export const AuthContextProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [value, setValue] = useState('');

  const updateValue = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <AuthContext.Provider value={{ value, updateValue }}>
      {children}
    </AuthContext.Provider>
  )
}
export const useauthContext = (): authContextData => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useauthContext debe ser utilizado dentro de ContextProvider');
    }
    return context;
  };

export const useAuth = () => useContext(AuthContext)
