import React from "react";
import Contanior from "../Components/Contanior";
import { ReactComponent as Imaege_for_about } from "../assets/Imaege_for_about.svg";

const About = () => {
  return (
    <Contanior>
      <div className="aboutWrapper">
        <div className="aboutMain">
          <div className="aboutLeftSide">
            <Imaege_for_about />
          </div>
          <div className="aboutRightSide">
            <h3>ABOUT US</h3>
            <p>
              If you’re a creative person then you can sell things in here & If
              you’re one who likes to collect creative things or wanna buy them
              as per your need than you’re on right place ! And same thing
              applies for normal things, not only for creative things, you can
              buy and sell normal things also !
            </p>
            <h4>More info</h4>
          </div>
        </div>
      </div>
    </Contanior>
  );
};

export default About;
