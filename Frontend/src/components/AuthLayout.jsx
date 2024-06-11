import React from "react";
import { Outlet } from "react-router-dom";
// import "./AuthLayout.css"; // Assuming you have this CSS file for styling

const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <div className="auth-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
