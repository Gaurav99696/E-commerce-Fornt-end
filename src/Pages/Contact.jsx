import React from "react";
import Contanior from "../Components/Contanior";
import { ReactComponent as Contact_page_iamge } from "../assets/Contact_page_iamge.svg";

const Contact = () => {
  return (
    <Contanior>
      <div className="contactWrapper">
        <div className="contactLeftSide">
          <Contact_page_iamge />
        </div>
        <div className="contactRightSide">
          <div className="contactForm">
            <h4>CONTACT US</h4>
            <h5>E-mail</h5>
            <input
              type="text"
              placeholder="Enter your Email..."
              value={"gaurav99696@gamil.com"}
            />
            <h5>Subject</h5>
            <input type="text" placeholder="Enter your Subject..." />
            <h5>Description</h5>
            <textarea placeholder="Enter your Description here..."></textarea>
          </div>
        </div>
      </div>
    </Contanior>
  );
};

export default Contact;
