import React from "react";

import Logo from "../Image/logo.png";

// importing css
import "../Style/Header.css";

import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
function Header() {
  return (
    <div className="header_app">
      <img className="header_logo" src={Logo} alt="" />
      <div className="header_center">
        <input type="text" />
        <SearchIcon color="white" />
      </div>
      <div className="header_right">
        <h1 className="header_right_h1">Become a Host</h1>
        <div className="header_right_icons">
          <LanguageIcon />
          <ExpandMoreIcon />
          <AccountCircleIcon />
        </div>
      </div>
    </div>
  );
}

export default Header;
