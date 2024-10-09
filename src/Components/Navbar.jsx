import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Polygon9 } from "../assets/Polygon 9.svg";
import { ReactComponent as BUYnSELL } from "../assets/BUYnSELL.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="navLogo">
        <Polygon9 className="logo" />
        <BUYnSELL className="logoName" />
      </div>
      <div className="navLinks">
        <Link to={"/"} className="links">
          HOME
        </Link>
        <Link to={"/about"} className="links">
          ABOUT
        </Link>
        <Link to={"/products"} className="links">
          PRODUCTS
        </Link>
        <Link to={"/contact"} className="links">
          CONTACT
        </Link>
        <Link to={"/profile"} className="links">
          PROFILE
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
