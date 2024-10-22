import React from "react";

const ProductCard = ({ cardDetails }) => {
  return (
    <div className="productCard">
      <div className="typeOfProductBanner">
        <p>{cardDetails.productType}</p>
      </div>
      <img src={cardDetails.productImage} alt={cardDetails.productImage} />
      <div className="productDetails">
        <h3>{cardDetails.productName}</h3>
        <h4>{cardDetails.productPrice}</h4>
      </div>
    </div>
  );
};

export default ProductCard;
