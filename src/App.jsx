import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ShowPage from "./pages/ShowPage.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ObserverProvider from "./context/ObserverContext.jsx";

export default function App() {
  return (
    <Router>
      <ObserverProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutMe" element={<AboutPage />} />
          <Route path="/projects/:project" element={<ShowPage />} />
        </Routes>
      </ObserverProvider>
    </Router>
  );
}
