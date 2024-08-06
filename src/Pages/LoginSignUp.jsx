import React from "react";
import "./Css/LoginSignUp.css";

const LoginSignUp = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign-up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account ? <span>Login</span>
          <div className="loginsignup-agree">
            <input type="checkbox" name="" id="" />
            <p>By Continuing , I agree to the terms of user & privacy policy</p>
          </div>
        </p>
      </div>
    </div>
  );
};

export default LoginSignUp;
