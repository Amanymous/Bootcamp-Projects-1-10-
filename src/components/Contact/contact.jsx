import React from "react";
import "./contact.css";

export default function Contact() {
  let [show, setShow] = React.useState(false);
  const showing = () => {
    setShow(true);
    setInterval(function () {
      setShow(true);
      setShow(false);
    }, 2000);
  };
  return (
    <div className="contact">
      {show ? (
        <p className="alert">Thanks for contacting us.</p>
      ) : (
        <p className="alert">Please fill the Contact form</p>
      )}
      <h1>Contact Us</h1>
      <p>React us out at Facebook or Twitter or Mail at infor@shoes.com</p>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Subject" />
      <input type="text" placeholder="Message" />
      <input onClick={showing} type="submit" value="Submit" />
    </div>
  );
}
