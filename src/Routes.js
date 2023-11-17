import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
import Stores from "./pages/Stores";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import App from "./App";

function RoutesComponent() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} exact />
        <Route path="/buy" element={<Buy />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        {/* Lägg till fler rutter här vid behov */}
      </Routes>
    </Router>
  );
}

export default RoutesComponent;
