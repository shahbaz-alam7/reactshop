import "./App.css";
import React, { useState } from "react";
import { data } from "./components/data";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainContent from "./components/main-content/MainContent";
function App() {
  const [currentShop, setCurrentShop] = useState("STARBUCKS");
  const [allData, setAlldata] = useState(data.menu);
  const [searchKey, setSearchkey] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const getCurrentShop = (shop) => {
    setCurrentShop(shop);
  };
  const getSearchedVal = (val) => {
    setSearchkey(val);
  };
  const handleSelectedItem = (item) => {
    setSelectedItem(item);
  };
  return (
    <>
      <Header
        currentShop={currentShop}
        setAlldata={setAlldata}
        getSearchedVal={getSearchedVal}
        searchKey={searchKey}
      />
      <MainContent
        allData={allData[currentShop]}
        handleSelectedItem={handleSelectedItem}
        getCurrentShop={getCurrentShop}
        getSearchedVal={getSearchedVal}
        selectedItem={selectedItem}
        searchKey={searchKey}
      />
      <Footer
        selectedItem={selectedItem}
        handleSelectedItem={handleSelectedItem}
        currentShop={currentShop}
        setAlldata={setAlldata}
      />
    </>
  );
}

export default App;
