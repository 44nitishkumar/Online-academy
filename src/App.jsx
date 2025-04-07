import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Login from "./components/Login";
import InstituteLogin from "./components/InstituteLogin";
import { useLocation } from "react-router";

function AppContent() {
  const location = useLocation();
  const hidesNavbarRoutes = ["/Login", "/InstituteLogin"];

  return (
    <>
      {!hidesNavbarRoutes.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/InstituteLogin" element={<InstituteLogin />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
