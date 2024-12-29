import React, {createContext, useState} from 'react';
import {refreshAccessToken, validateAccessToken} from '../services/auth';

type AuthContextType = {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  initializeAuth: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const initializeAuth = async () => {
    const isValid = await validateAccessToken();
    if (isValid) {
      setIsAuthenticated(true);
      return;
    }
    const isRefreshed = await refreshAccessToken();
    setIsAuthenticated(isRefreshed);
  };

  return (
    <AuthContext.Provider
      value={{isAuthenticated, setIsAuthenticated, initializeAuth}}>
      {children}
    </AuthContext.Provider>
  );
};
