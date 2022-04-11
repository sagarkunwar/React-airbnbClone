import React, { useState } from "react";
import "../Style/Banner.css";
import Button from "@mui/material/Button";
import Search from "./Search";

function Banner() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner_search">
        {showSearch && <Search />}
        <Button
          className="banner_searchButton"
          variant="outlined"
          onClick={() => {
            setShowSearch(!showSearch);
          }}
        >
          {showSearch ? "Hide" : "Show Dates"}
        </Button>
      </div>
      <div className="banner_area">
        <h1 className="banner_info">Let your curiosity do the booking</h1>
        <button className="banner_button">I'm flexible</button>
      </div>
    </div>
  );
}

export default Banner;
