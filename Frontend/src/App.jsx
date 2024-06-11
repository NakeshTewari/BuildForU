import React from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Projects, Ongoing, Previous } from "./pages/Projects";

import { WorkRequests } from "./pages/WorkRequests";

import { Business, AddBusiness, CurrentBusiness } from "./pages/Business";

import Profile from "./pages/Profile";

import Support from "./pages/Support";
import Logout from "./pages/Logout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MainLayout from "./components/MainLayout";
import AuthLayout from "./components/AuthLayout";
function App() {
  return (
    <Router>
      {/* <SideBar /> */}
      <div className="main-content">
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/ongoing" element={<Ongoing />} />
            <Route path="/projects/previous" element={<Previous />} />
            <Route path="/workRequests" element={<WorkRequests />} />
            <Route path="/business" element={<Business />} />
            <Route
              path="/business/currentBusiness"
              element={<CurrentBusiness />}
            />
            <Route path="/business/addBusiness" element={<AddBusiness />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/support" element={<Support />} />
            <Route path="/logout" element={<Logout />} />
          </Route>

          {/* Routes without Landing Page */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>

          {/* Default route */}
          <Route path="/" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
