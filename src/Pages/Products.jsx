import React, { useState } from "react";
import Contanior from "../Components/Contanior";
import { ReactComponent as Search_Icon } from "../assets/Search_Icon.svg";
import Filters from "../Components/Filters";
import Button from "../Components/Button";

const Products = () => {
  const [productTypes, setProductTypes] = useState("All");
  const [priceFilter, setPriceFilter] = useState("Low-High");
  const [timeFilter, setTimeFilter] = useState("Latest");

  const filters = [
    {
      filterName: "Product Types",
      value: ["All", "Hand made", "Normal"],
      active: productTypes,
    },
    {
      filterName: "According To Price",
      value: ["Low-High", "High-low"],
      active: priceFilter,
    },
    {
      filterName: "According To Time",
      value: ["Latest", "Oldest"],
      active: timeFilter,
    },
  ];
  return (
    <Contanior>
      <div className="productsWrapper">
        <div className="productsMain">
          <div className="productsLeftSide"></div>
          <div className="productsRightSide">
            <div className="searchBar">
              <input type="text" placeholder="Search here...." />
              <Search_Icon />
            </div>
            <div className="filtersContanior">
              <h3>Filters</h3>
              <Filters
                filters={filters}
                setPriceFilter={setPriceFilter}
                setProductTypes={setProductTypes}
                setTimeFilter={setTimeFilter}
              />
            </div>
            <div className="addProductContanior">
              <h5>Want to add product ?</h5>
              <Button value={"Add Product +"} />
            </div>
          </div>
        </div>
      </div>
    </Contanior>
  );
};

export default Products;
