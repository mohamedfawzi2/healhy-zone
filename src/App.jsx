import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import MenuPage from "./components/MenuPage";
import ContactPage from "./components/ContactPage";
import AboutPage from "./components/AboutPage ";
import "./App.css";

const App = () => {
  return (
    <div>
      <NavBar />
      
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/menupage"  element={<MenuPage/>} />
        <Route path="/contact"  element={<ContactPage/>} />
        <Route path="/about"  element={<AboutPage/>} /> 
      </Routes>
    </div>
  );
};

export default App;
