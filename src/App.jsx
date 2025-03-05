import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from './Layouts/MainLayout';
import Homepage from "./Pages/Homepage";
import Aboutpage from "./Pages/Aboutpage";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage/>} />
          <Route path="about" element={<Aboutpage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
