import React from "react";
import {  Routes, Route,  } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Program from "./components/Programs/Program";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/programs" element={<Program/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
