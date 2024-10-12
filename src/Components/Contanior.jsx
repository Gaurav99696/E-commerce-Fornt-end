import React from "react";

const Contanior = ({ children }) => {
  return (
    <div className="contanior">
      <div className="decorator1"></div>
      {children}
    </div>
  );
};

export default Contanior;
