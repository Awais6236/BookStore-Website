import React, { createContext, useContext, useState } from 'react';

// 1. Create the context
export const AuthContext = createContext();

// 2. Custom hook (you forgot this export in the latest version you sent!)
export const useAuth = () => useContext(AuthContext);

// 3. Provider component
const AuthProvider = ({ children }) => {
  const initialAuthUser = localStorage.getItem("Users");
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
