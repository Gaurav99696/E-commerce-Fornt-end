import React from "react";
import "./PagesCss.css";
import Contanior from "../Components/Contanior";
import { ReactComponent as Home_Page_Image } from "../assets/Home_Page_Image.svg";
import { ReactComponent as Check_box } from "../assets/Check_box.svg";
import { ReactComponent as Star } from "../assets/Star.svg";

const Home = () => {
  return (
    <Contanior>
      <div className="homeMainContanior">
        <div className="homeLeftContanior">
          <div className="homePageMainImage">
            <Home_Page_Image />
          </div>
          <div className="paymentVarifiedIcon">
            <Check_box />
            Payment varified
          </div>
        </div>
        <div className="homeRightContanior">
          <div className="greetings">
            <h3 className="homeGreet">Hey There !</h3>
            <h1 className="homeQuestion">Why are you here ?</h1>
            <p className="homeDescription">
              Want to buy something or want to sell ? You can do Both !
            </p>
          </div>
          <div className="homeRatingStars">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
      </div>
    </Contanior>
  );
};

export default Home;
