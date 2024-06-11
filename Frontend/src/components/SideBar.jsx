import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";

const SideBar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="nav-title">BuildForU</div>
        <div className="nav-items">
          <div className="nav-item search-container">
            <FaIcons.FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
          </div>
          <div className="nav-item">
            <FaIcons.FaBell className="notificationIcon" />
          </div>
          <div className="nav-item">
            <Link to="/dashboard/profile">
              <FaIcons.FaUserCircle className="profileIcon" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <nav className="sidebar-nav active">
          <div className="sidebar-wrap">
            {SidebarData.map((item, index) => (
              <SubMenu item={item} key={index} />
            ))}
          </div>
        </nav>
        <main className="main-content">
          {/* The Routes component will render the selected content here */}
        </main>
      </div>
    </div>
  );
};

export default SideBar;
