import React from "react";
import Header from "./Header/header";
import "@fontsource/poppins";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/400-italic.css";
import data from "./filmData/data";
import Film from "./filmList/film";
import filmDirect from "./filmDirectPage/filmDirect";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Film />} />
          <Route path="/filmDirectPage/:id" element={<filmDirect />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
