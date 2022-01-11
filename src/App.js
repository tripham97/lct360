import React from "react";
import NavBar from "./components/Nav";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import TechnologyScreen from "./screens/TechnologyScreen";
import ContactScreen from "./screens/ContactScreen";
import AboutScreen from "./screens/AboutScreen";
import SupportingScreen from "./screens/SupportingScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/technology" element={<TechnologyScreen />} />
        <Route exact path="/about" element={<AboutScreen />} />
        <Route exact path="/contact" element={<ContactScreen />} />
        <Route exact path="/supporting" element={<SupportingScreen />} />
        <Route exact path="/" element={<HomeScreen />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
