import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./auth";

function LoginPage() {
  const auth = useAuth();
  const [username, setUsername] = useState("");
  const login = (e) => {
    e.preventDefault();
    auth.login({ username });
  };
  if (auth.user) {
    return <Navigate to="/profile" />;
  }
  return (
    <>
      <h1>Login</h1>

      <form onSubmit={login}>
        <label>Escribe tu usuario </label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <button type="submit">Entrar</button>
      </form>
    </>
  );
}

export default LoginPage;
