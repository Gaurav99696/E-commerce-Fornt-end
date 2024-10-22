import React, { useState } from "react";
import Contanior from "../Components/Contanior";
import { ReactComponent as Search_Icon } from "../assets/Search_Icon.svg";
import Filters from "../Components/Filters";
import Button from "../Components/Button";
import ProductCard from "../Components/ProductCard";
import { Outlet, useNavigate } from "react-router-dom";

const Products = () => {
  const [productTypes, setProductTypes] = useState("All");
  const [priceFilter, setPriceFilter] = useState("Low-High");
  const [timeFilter, setTimeFilter] = useState("Latest");

  const navigate = useNavigate();

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

  const products = [
    {
      productType: "Noraml",
      productImage:
        "https://cdn.pixabay.com/photo/2022/12/01/04/42/man-7628305_1280.jpg",
      productName: "An Airplane",
      productPrice: "$ 7.99",
      productDescription: "This product is Blah Blah Blah.",
      ProductIngridents: [
        "Origami Paper",
        "Glue Gun For Guling",
        "Secth Pens / Colors",
        "Hard Work / Dedication ",
      ],
    },
    {
      productType: "Noraml",
      productImage:
        "https://cdn.pixabay.com/photo/2022/12/01/04/42/man-7628305_1280.jpg",
      productName: "An Airplane",
      productPrice: "$ 7.99",
      productDescription: "This product is Blah Blah Blah.",
      ProductIngridents: [
        "Origami Paper",
        "Glue Gun For Guling",
        "Secth Pens / Colors",
        "Hard Work / Dedication ",
      ],
    },
    {
      productType: "Noraml",
      productImage:
        "https://cdn.pixabay.com/photo/2022/12/01/04/42/man-7628305_1280.jpg",
      productName: "An Airplane",
      productPrice: "$ 7.99",
      productDescription: "This product is Blah Blah Blah.",
      ProductIngridents: [
        "Origami Paper",
        "Glue Gun For Guling",
        "Secth Pens / Colors",
        "Hard Work / Dedication ",
      ],
    },
    {
      productType: "Noraml",
      productImage:
        "https://cdn.pixabay.com/photo/2022/12/01/04/42/man-7628305_1280.jpg",
      productName: "An Airplane",
      productPrice: "$ 7.99",
      productDescription: "This product is Blah Blah Blah.",
      ProductIngridents: [
        "Origami Paper",
        "Glue Gun For Guling",
        "Secth Pens / Colors",
        "Hard Work / Dedication ",
      ],
    },
    {
      productType: "Noraml",
      productImage:
        "https://cdn.pixabay.com/photo/2022/12/01/04/42/man-7628305_1280.jpg",
      productName: "An Airplane",
      productPrice: "$ 7.99",
      productDescription: "This product is Blah Blah Blah.",
      ProductIngridents: [
        "Origami Paper",
        "Glue Gun For Guling",
        "Secth Pens / Colors",
        "Hard Work / Dedication ",
      ],
    },
    {
      productType: "Noraml",
      productImage:
        "https://cdn.pixabay.com/photo/2022/12/01/04/42/man-7628305_1280.jpg",
      productName: "An Airplane",
      productPrice: "$ 7.99",
      productDescription: "This product is Blah Blah Blah.",
      ProductIngridents: [
        "Origami Paper",
        "Glue Gun For Guling",
        "Secth Pens / Colors",
        "Hard Work / Dedication ",
      ],
    },
    {
      productType: "Noraml",
      productImage:
        "https://cdn.pixabay.com/photo/2022/12/01/04/42/man-7628305_1280.jpg",
      productName: "An Airplane",
      productPrice: "$ 7.99",
      productDescription: "This product is Blah Blah Blah.",
      ProductIngridents: [
        "Origami Paper",
        "Glue Gun For Guling",
        "Secth Pens / Colors",
        "Hard Work / Dedication ",
      ],
    },
    {
      productType: "Noraml",
      productImage:
        "https://cdn.pixabay.com/photo/2022/12/01/04/42/man-7628305_1280.jpg",
      productName: "An Airplane",
      productPrice: "$ 7.99",
      productDescription: "This product is Blah Blah Blah.",
      ProductIngridents: [
        "Origami Paper",
        "Glue Gun For Guling",
        "Secth Pens / Colors",
        "Hard Work / Dedication ",
      ],
    },
    {
      productType: "Noraml",
      productImage:
        "https://cdn.pixabay.com/photo/2022/12/01/04/42/man-7628305_1280.jpg",
      productName: "An Airplane",
      productPrice: "$ 7.99",
      productDescription: "This product is Blah Blah Blah.",
      ProductIngridents: [
        "Origami Paper",
        "Glue Gun For Guling",
        "Secth Pens / Colors",
        "Hard Work / Dedication ",
      ],
    },
    {
      productType: "Noraml",
      productImage:
        "https://cdn.pixabay.com/photo/2022/12/01/04/42/man-7628305_1280.jpg",
      productName: "An Airplane",
      productPrice: "$ 7.99",
      productDescription: "This product is Blah Blah Blah.",
      ProductIngridents: [
        "Origami Paper",
        "Glue Gun For Guling",
        "Secth Pens / Colors",
        "Hard Work / Dedication ",
      ],
    },
    {
      productType: "Noraml",
      productImage:
        "https://cdn.pixabay.com/photo/2022/12/01/04/42/man-7628305_1280.jpg",
      productName: "An Airplane",
      productPrice: "$ 7.99",
      productDescription: "This product is Blah Blah Blah.",
      ProductIngridents: [
        "Origami Paper",
        "Glue Gun For Guling",
        "Secth Pens / Colors",
        "Hard Work / Dedication ",
      ],
    },
  ];

  return (
    <Contanior>
      <Outlet />
      <div className="productsWrapper">
        <div className="productsMain">
          <div className="productsLeftSide">
            {products.map((value) => {
              return <ProductCard cardDetails={value} />;
            })}
          </div>
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
              <div onClick={() => navigate("/products/addProduct")}>
                <Button value={"Add Product +"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Contanior>
  );
};

export default Products;
