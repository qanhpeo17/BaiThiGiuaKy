import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Header from "./Header/header";
import Film from "./filmList/film";
import reportWebVitals from "./reportWebVitals";
import filmDirect from "./filmDirectPage/filmDirect";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const RootComponent = () => (
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="filmDirectPage/:id" element={<filmDirect />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

const Home = () => {
  return (
    <div>
      <Header />
      <Film />
    </div>
  );
};

root.render(<RootComponent />);
reportWebVitals();
