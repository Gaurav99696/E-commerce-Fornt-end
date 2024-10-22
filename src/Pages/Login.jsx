import React from "react";
import Contanior from "../Components/Contanior";
import { ReactComponent as LoginPageImage } from "../assets/LoginPageImage.svg";
import Button from "../Components/Button";

const Login = () => {
  return (
    <Contanior>
      <div className="loginWrapper">
        <div className="loginLeftSide">
          <LoginPageImage />
        </div>
        <div className="loginRightSide">
          <h3>LOG IN</h3>
          <h5>Email:</h5>
          <input type="text" placeholder="Enter your Email here....." />
          <h5>Password:</h5>
          <input type="text" placeholder="Enter your Password here....." />
          <div className="buttonSection">
            <p className="forgetPass">Already have an account ?</p>
            <Button value={"LOG IN"} />
            <p>Already have an account ?</p>
          </div>
        </div>
      </div>
    </Contanior>
  );
};

export default Login;
