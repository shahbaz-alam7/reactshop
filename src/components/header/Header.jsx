import React, { useState } from "react";
import "./header.css";
const Header = (props) => {
  const { searchKey, currentShop, setAlldata, getSearchedVal } = props;
  const [key, setKey] = useState("");
  return (
    <div className="header">
      <input
        type="search"
        placeholder="Search here..."
        id="input"
        value={searchKey}
        onChange={(e) => {
          setKey(e.target.value);
          getSearchedVal(e.target.value);
        }}
      />
    </div>
  );
};

export default Header;
