import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WorkPage from "./WorkPage";
import InfoPage from "./InfoPage";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WorkPage />} />
        <Route path="/info" element={<InfoPage />} />
      </Routes>
    </Router>
  );
};

export default App;
