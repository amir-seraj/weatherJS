import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Docs from "./pages/Docs";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Docs" element={<Docs />} />
      </Routes>
    </>
  );
}

export default App;
