import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ShowPage from "./pages/ShowPage.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutMe" element={<AboutPage />} />
        <Route path="/projects/:project" element={<ShowPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
