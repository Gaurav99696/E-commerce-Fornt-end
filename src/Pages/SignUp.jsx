import React from "react";
import Contanior from "../Components/Contanior";
import { ReactComponent as SingUpPageImage } from "../assets/SingUpPageImage.svg";
import Button from "../Components/Button";

const SignUp = () => {
  return (
    <Contanior>
      <div className="signUpWrapper">
        <div className="signUpLeftSide">
          <SingUpPageImage />
        </div>
        <div className="signUpRightSide">
          <h3>SIGN UP</h3>
          <h5>User Name:</h5>
          <input type="text" placeholder="Enter your User name here....." />
          <h5>Email:</h5>
          <input type="text" placeholder="Enter your Email here....." />
          <h5>Password:</h5>
          <input type="text" placeholder="Enter your Password here....." />
          <div className="buttonSection">
            <Button value={"SIGN UP"} />
            <p>Already have an account ?</p>
          </div>
        </div>
      </div>
    </Contanior>
  );
};

export default SignUp;
