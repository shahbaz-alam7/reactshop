import React, { useState, useEffect } from "react";
import RightBox from "./rightbox/RightBox";
import LeftBox from "./leftbox/LeftBox";
import "./main.css";
import { data } from "../data";
const MainContent = (props) => {
  const [active, setActive] = useState("STARBUCKS");
  const {
    getCurrentShop,
    handleSelectedItem,
    getSearchedVal,
    allData,
    selectedItem,
    searchKey,
  } = props;
  useEffect(() => {
    getCurrentShop(active);
  }, [active]);
  const handleChangeShop = (shop) => {
    setActive(shop);
  };
  const searchedItem =
    allData &&
    allData.filter((detail) => {
      if (detail.itemname.toLowerCase().includes(searchKey.toLowerCase())) {
        return true;
      }
      return false;
    });
  return (
    <>
      <div className="container">
        <div className="leftdiv">
          {Object.keys(data.menu).map((name) => (
            <LeftBox
              name={name}
              key={name.split(" ").join("-")}
              getSearchedVal={getSearchedVal}
              handleChangeShop={handleChangeShop}
              handleSelectedItem={handleSelectedItem}
              active={active}
            />
          ))}
        </div>
        <div className="rightdiv">
          {searchedItem.length > 0 ? (
            searchedItem.map((detail) => (
              <RightBox
                detail={detail}
                key={detail.itemid}
                handleSelectedItem={handleSelectedItem}
                selectedItem={selectedItem}
              />
            ))
          ) : (
            <div className="noItem">
              <p>No Food Found</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MainContent;
