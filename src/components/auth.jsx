import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const adminList = ["Irisval", "RetaxMaster", "freddier"];
const editorList = ["Felipe"];

const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);

  const login = ({ username }) => {
    const isAdmin = adminList.find((admin) => admin === username);
    const isEditor = editorList.find((editor) => editor === username);
    setUser({ username, isAdmin, isEditor });
    navigate("/profile");
  };

  const logout = () => {
    setUser(null);
    navigate("/");
  };

  const auth = { user, login, logout };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const auth = React.useContext(AuthContext);
  return auth;
}

function AuthRoute(props) {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/login" />;
  }

  return props.children;
}

export { AuthProvider, AuthRoute, useAuth };
