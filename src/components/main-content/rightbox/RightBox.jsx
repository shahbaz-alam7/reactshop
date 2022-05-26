import React from "react";
import "./right.css";
const RightBox = (props) => {
  const {
    detail: { itemname, itemid, itemprice, outofstock },
    handleSelectedItem,
    selectedItem,
  } = props;
  // console.log(props.detail);
  return (
    <>
      <div
        id="eachItem"
        className={outofstock ? "outOfStock" : ""}
        style={{
          border:
            selectedItem && selectedItem.itemid === itemid
              ? "3px solid black"
              : "none",
        }}
        onClick={() => {
          if (!selectedItem) {
            handleSelectedItem(props.detail);
          } else {
            handleSelectedItem(null);
          }
        }}
      >
        <span id="itemName">{itemname}</span>
        <div id="itemPrice">{itemprice}</div>
      </div>
    </>
  );
};

export default RightBox;
