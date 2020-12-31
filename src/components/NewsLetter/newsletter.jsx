import React from "react";
import "./newsletter.css";
import EmailIcon from "@material-ui/icons/Email";

export const NewsLetter = () => {
  return (
    <div className="news">
      <div className="email">
        <EmailIcon />
        &nbsp;&nbsp; Signup for NewsLetter
      </div>
      <div className="submit">
        <input type="email" placeholder="test@gmail.com" />
        <button type="submit">Submit</button>
      </div>
    </div>
  );
};
