import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <Link to="/" className="app-header">
      WebGen Studio Task 4
    </Link>
  );
};

export default Header;
