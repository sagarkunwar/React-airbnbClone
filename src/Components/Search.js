import React, { useState } from "react";

import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

import "../Style/Search.css";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import { DateRangePicker } from "react-date-range";

function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(range) {
    setStartDate(range.selection.startDate);
    setEndDate(range.selection.endDate);
  }

  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        Number of Guest <PeopleAltIcon />
      </h2>
      <input type="number" min={0} defaultValue={2} />
      <button>Search AirBnb</button>
    </div>
  );
}

export default Search;
