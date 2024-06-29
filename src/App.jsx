import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import ObserverProvider from "./context/ObserverContext.jsx";
import RoutesWithAnimation from "./context/RoutesWithAnimation.jsx";

export default function App() {
  return (
    <Router>
      <ObserverProvider>
        <RoutesWithAnimation />
      </ObserverProvider>
    </Router>
  );
}
