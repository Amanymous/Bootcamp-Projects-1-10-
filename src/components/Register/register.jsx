import React from "react";
import "./register.css";
import Header from "../Header/Header"
// import Blob1 from "../../Images/blob.svg";
// import Blob2 from "../../Images/blob2.svg";

export const Register = () => {
  let [show, setShow] = React.useState(false);
  const showing = () => {
    setShow(true);
    setInterval(function () {
      setShow(false);
    }, 2000);
  };
  return (
    
    <div className="register">
      <Header/>
      {show ? <p className="alert">Sucessfully Registered</p> : null}
      <h1>Register</h1>
      {/* <img className="blob1" src={Blob1} alt="blob1" />
      <img className="blob2" src={Blob2} alt="blob2" /> */}
      <label for="email">Email</label>
      <input type="email" placeholder="Email Email" />
      <label for="password">Password</label>
      <input type="password" placeholder="Enter Password" />
      <label for="password">Confirm Password</label>
      <input type="password" placeholder="Confirm Password" />
      <input onClick={showing} type="submit" value="Submit" />
    </div>
  );
};
