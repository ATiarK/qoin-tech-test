import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Genres from "./pages/Genres";
import Details from "./pages/Details";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
