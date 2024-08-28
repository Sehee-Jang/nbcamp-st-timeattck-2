import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import PokemonDetail from "./components/PokemonDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dex' element={<Dex />} />
          <Route path='/details' element={<PokemonDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
