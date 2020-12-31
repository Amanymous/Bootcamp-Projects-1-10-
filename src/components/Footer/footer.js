import React from "react";
import "./footer.css";
import Boxes from "../FooterBoxes/boxes";
import { NewsLetter } from "../NewsLetter/newsletter";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";;

export default function footer() {
  return (
    <div>
      <NewsLetter />
      <div className="big">
        <div className="logoName">
          <h3>Shoes</h3>
          <p>Choose your Shoes</p>
        </div>
        <Boxes
          title="Products"
          links={[
            "Best Seller",
            "WishList",
            "Featured Products",
            "Trending Products",
          ]}
        />
        <Boxes
          title="Our Company"
          links={[
            "Search",
            "Contact Us",
            "Delivery",
            "Terms & conditions of Use",
          ]}
        />
        <Boxes
          disable="true"
          title="Store Information"
          links={[
            "Shoes Store, Lodon",
            "+421016-659-01",
            "shoes@store.com",
            ".",
          ]}
          icons={[<LocationOnIcon />, <PhoneIcon />, <EmailIcon />]}
        />
      </div>
      <div className="small">
        <p>Copyright &copy; Shoes 2020</p>
        <p>
          Make with{" "}
          <span role="img" aria-labelledby="coding">
            👨‍💻
          </span>{" "}
          by Aman Mirza{" "}
        </p>
      </div>
    </div>
  );
}
