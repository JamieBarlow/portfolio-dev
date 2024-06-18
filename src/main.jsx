import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ShowPage from "./pages/ShowPage.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/aboutMe" element={<AboutPage />} />
        <Route path="/projects" element={<ShowPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
