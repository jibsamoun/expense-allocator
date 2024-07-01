import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import GroupchatPage from "./pages/GroupchatPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignUpPage />} /> 
      <Route path="/homePage" element={<HomePage />} />
      <Route path="/GroupchatPage" element={<GroupchatPage />} />
    </Routes>
  );
};

export default App;
