import React, { lazy } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
// const Home = lazy(() => "./Pages/Home");
const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;
const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={()=><Home />} exact/>
      <Route path="/about" element={()=><About />} exact/>
      <Route path="/contacts" element={()=><Contact />} exact/>
    </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
