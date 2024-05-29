import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Breaths from "./pages/Breaths";
import Goals from "./pages/Goals";
import Meditations from "./pages/Meditations";
import Logo from "./assets/GuruCatLogo.svg";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [dimensions, setDimensions] = useState([]);
  const [breaths, setBreaths] = useState([]);
  const [createForm, setCreateForm] = useState({
    title: "",
    dimension: "Social",
    body: "",
  });
  const [updateForm, setUpdateForm] = useState({
    _id: null,
    title: "",
    dimension: "",
    body: "",
  });

  useEffect(() => {
    async function getGoals() {
      try {
        const response = await fetch("http://localhost:3000/goals");
        const data = await response.json();
        setGoals(data.goals);
      } catch (error) {
        console.error(error);
      }
    }
    getGoals();
  }, []);
  //-------Get Goals and put into State-----

  useEffect(() => {
    async function getDimensions() {
      try {
        const response = await fetch("http://localhost:3000/dimensions");
        const data = await response.json();
        setDimensions(data.dimensions);
      } catch (error) {
        console.error(error);
      }
    }
    getDimensions();
  }, []);
  //-------Get Dimensions and put into State-----

  useEffect(() => {
    async function getBreaths() {
      try {
        const response = await fetch("http://localhost:3000/breaths");
        const data = await response.json();
        setBreaths(data.breaths);
      } catch (error) {
        console.error(error);
      }
    }
    getBreaths();
  }, []);
  //-------Get Breathing Techniques and put into State-----
  return (
    <>
      <Routes>
        <Route path="/" element={<Home src={Logo} alt="yoga cat guru" />} />
        <Route
          path="/breaths"
          element={<Breaths src={Logo} alt="yoga cat guru" breaths={breaths} />}
        />
        <Route
          path="/goals"
          element={
            <Goals
              src={Logo}
              alt="yoga cat guru"
              dimensions={dimensions}
              goals={goals}
              setGoals={setGoals}
              createForm={createForm}
              setCreateForm={setCreateForm}
              updateForm={updateForm}
              setUpdateForm={setUpdateForm}
            />
          }
        />
        <Route
          path="/meditations"
          element={<Meditations src={Logo} alt="yoga cat guru" />}
        />
      </Routes>
    </>
  );
}
