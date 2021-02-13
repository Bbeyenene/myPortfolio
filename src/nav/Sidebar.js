import React from "react";
import { FaTimes } from "react-icons/fa";
// import logo from "../pages/services/logo.svg";
import { useGlobalContext } from "../context";
import links from "../pages/projects/projects.json";
import "./sidebar.css";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="sidebar-header">
        {/* <img src={logo} className="logo" alt="coding addict" /> */}
        <h3 style={{ color: "#000000" }}>projects</h3>
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links2">
        {links.map((link) => {
          const { id, title } = link;
          return (
            <li key={id}>
              <a className="ancker" href="/projects">
                {/* {icon}
                {text} */}
                {title}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
