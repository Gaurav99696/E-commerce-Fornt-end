import React from "react";

const Filters = ({
  filters,
  setPriceFilter,
  setProductTypes,
  setTimeFilter,
}) => {
  const handleFilterEvent = (value, val) => {
    if (val.filterName === "Product Types") {
      setProductTypes(value);
    } else if (val.filterName === "According To Price") {
      setPriceFilter(value);
    } else if (val.filterName === "According To Time") {
      setTimeFilter(value);
    }
  };
  return (
    <>
      {filters.map((val, key) => {
        return (
          <div className="filters" key={key}>
            <h4>{val.filterName}</h4>
            <div className="options">
              {val.value.map((value, key) => {
                return val.active === value ? (
                  <div className="filterOption active">{value}</div>
                ) : (
                  <div
                    className="filterOption"
                    onClick={() => handleFilterEvent(value, val)}
                  >
                    {value}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Filters;
