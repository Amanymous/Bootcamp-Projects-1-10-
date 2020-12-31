import React from "react";
import { Link } from "react-router-dom";
import "./boxes.css";

export default function Boxes({ title, links, disable, icons }) {
  return (
    <div className={`boxes ${disable ? "disabled" : ""}`}>
      <h3>{title}</h3>
      <Link to="/">
        {icons ? icons[0] : ""}
        {links[0]}
      </Link>
      <Link to="/">
        {icons ? icons[1] : ""}
        {links[1]}
      </Link>
      <Link to="/">
        {icons ? icons[2] : ""}
        {links[2]}
      </Link>
      <Link to="/">{links[3]}</Link>
    </div>
  );
}
