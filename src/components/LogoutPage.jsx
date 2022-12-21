import React from "react";
import { useAuth } from "./auth";

function LogoutPage() {
  const auth = useAuth();
  const logout = (e) => {
    e.preventDefault();
    auth.logout();
  };
  return (
    <>
      <h1>Logout</h1>

      <form onSubmit={logout}>
        <label>Quieres hacer logout</label>

        <button type="submit">Salir</button>
      </form>
    </>
  );
}

export default LogoutPage;
