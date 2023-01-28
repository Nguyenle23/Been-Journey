import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <ul>
      <li>
        <Link to="/journey-gallery">HomePage</Link>
      </li>
      <li>
        <Link to="/journey">Journey</Link>
      </li>
    </ul>
  );
};

export default Sidebar;
