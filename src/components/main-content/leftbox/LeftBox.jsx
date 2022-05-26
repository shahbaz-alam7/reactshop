import React from "react";
import "./leftbox.css";
const LeftBox = (props) => {
  const { name, active, getSearchedVal, handleChangeShop, handleSelectedItem } =
    props;
  return (
    <>
      <div className="left">
        <div
          className={active === name ? "active" : "inActive"}
          onClick={() => {
            handleChangeShop(name);
            handleSelectedItem(null);
            getSearchedVal("");
          }}
        >
          {name}
        </div>
      </div>
    </>
  );
};

export default LeftBox;
