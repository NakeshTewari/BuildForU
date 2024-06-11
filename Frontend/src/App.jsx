import React from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import {
  Projects,
  Ongoing,
  Previous,
} from "./pages/Projects";

import {
  WorkRequests,
} from "./pages/WorkRequests";

import {
	Business,
	AddBusiness,
	CurrentBusiness,
} from "./pages/Business";

import Profile from "./pages/Profile";

import Support from "./pages/Support";
import Logout from "./pages/Logout";


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
          <Route path="/business/currentBusiness" element={<CurrentBusiness />} />
          <Route path="/business/addBusiness" element={<AddBusiness />} />
		  <Route path="/profile" element={<Profile />} />
          <Route path="/support" element={<Support />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
