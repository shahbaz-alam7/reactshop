import React from "react";
import "./footer.css";
const Footer = (props) => {
  const { selectedItem, handleSelectedItem, currentShop, setAlldata } = props;
  const manageShopitem = (check) => {
    setAlldata((preval) => {
      const Available = preval[currentShop].map((item) => ({
        ...item,
        outofstock: check,
      }));
      return {
        ...preval,
        [`${currentShop}`]: Available,
      };
    });
  };
  return (
    <>
      <div id="footer">
        <button
          className="selectedBox"
          disabled={selectedItem}
          onClick={() => manageShopitem(false)}
        >
          All Available
        </button>
        <button
          className="selectedBox"
          disabled={selectedItem}
          onClick={() => manageShopitem(true)}
        >
          All Unavailable
        </button>
        <button
          disabled={!selectedItem}
          className="selectedBox"
          onClick={() => {
            setAlldata((pval) => {
              const changeAvailability = pval[currentShop].map((detail) => {
                if (detail.itemid === selectedItem.itemid) {
                  return {
                    ...detail,
                    outofstock: !detail.outofstock,
                  };
                }
                return detail;
              });
              return { ...pval, [`${currentShop}`]: changeAvailability };
            });
            handleSelectedItem(null);
          }}
        >
          Buy Now
        </button>
      </div>
    </>
  );
};

export default Footer;
