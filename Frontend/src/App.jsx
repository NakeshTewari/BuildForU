import React from "react";
import "./App.css";
import SideBar from "./components/contractor/SideBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import {
  Projects,
  Ongoing,
  Previous,
} from "./pages/contractor/Projects";

import {
  WorkRequests,
} from "./pages/contractor/WorkRequests";

// import {
// 	Business,
// 	AddBusiness,
// 	CurrentBusiness,
// } from "./pages/contractor/Business";
import Business from "./pages/contractor/Business/Business";

import Profile from "./pages/contractor/Profile";

import Support from "./pages/contractor/Support";
import Logout from "./pages/contractor/Logout";


function App() {
  return (
    <Router>
      <SideBar />
      <div className="main-content">
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/ongoing" element={<Ongoing />} />
          <Route path="/projects/previous" element={<Previous />} />
          <Route path="/workRequests" element={<WorkRequests />} />
		      <Route path="/business" element={<Business />} />
		      <Route path="/profile" element={<Profile />} />
          <Route path="/support" element={<Support />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
