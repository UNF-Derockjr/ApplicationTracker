import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginSignup from "./pages/LoginSignup";
import ApplicationTracker from "./pages/ApplicationTracker";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/app" element={<ApplicationTracker />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
