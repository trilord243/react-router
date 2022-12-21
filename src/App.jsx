import { useState } from "react";

import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { ProfilePage } from "./components/ProfilePage";
import BlogPage from "./components/BlogPage";
import HomePage from "./components/HomePage";
import Menu from "./components/Menu";
import BlogPost from "./components/BlogPost";
import LoginPage from "./components/LoginPage";
import LogoutPage from "./components/LogoutPage";
import { AuthProvider, AuthRoute } from "./components/auth";
import CrearBlog from "./components/CrearBlog";
function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/crear"
              element={
                <AuthRoute>
                  <CrearBlog />
                </AuthRoute>
              }
            />
            <Route path="/blog" element={<BlogPage />}>
              <Route path=":slug" element={<BlogPost />} />{" "}
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/logout"
              element={
                <AuthRoute>
                  <LogoutPage />
                </AuthRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <AuthRoute>
                  <ProfilePage />
                </AuthRoute>
              }
            />
            <Route path="*" element={<p>Not Found </p>} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
