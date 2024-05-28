import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Breaths from "./pages/Breaths";
import Goals from "./pages/Goals";
import Meditations from "./pages/Meditations";

export default function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/breaths" element={<Breaths />}/>
        <Route path="/goals" element={<Goals />}/>
        <Route path="/meditations" element={<Meditations />}/>
      </Routes>
    </>
  );
}


