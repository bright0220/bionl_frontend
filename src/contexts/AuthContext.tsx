import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

type AuthContextProps = {
  authState: AuthState;
  setAuthState: (authInfo: AuthState) => void;
  logout?: () => void;
  isAuthenticated: () => boolean;
};

const defaultAuthState: AuthState = {
  token: null,
  user: null,
};

const AuthContext = createContext<AuthContextProps>({
  authState: defaultAuthState,
  setAuthState: ({ ...defaultAuthState }) => defaultAuthState,
  isAuthenticated: () => false,
});

type AuthState = {
  token: string | null;
  user: any;
};

const AuthProvider: React.FC = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  const [authState, setAuthState] = useState<AuthState>({
    token,
    user: user ? JSON.parse(user) : null,
  });

  const setAuthInfo = ({ token, user }: AuthState) => {
    localStorage.setItem("token", token as string);
    localStorage.setItem("user", JSON.stringify(user));

    setAuthState({
      token,
      user,
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setAuthState({
      token: null,
      user: null,
    });
    navigate("/login");
  };

  const isAuthenticated = () => {
    return !!authState.token;
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        setAuthState: (authInfo: AuthState) => setAuthInfo(authInfo),
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
