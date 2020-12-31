import React from "react";
import './Header.css';
import { context } from "../contextApi/ContextValue";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonIcon from "@material-ui/icons/Person";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";

export default function Header() {
  let value = React.useContext(context.ContextValue);
  return (
    <div className="header">
      <div>Shoes</div>
      <nav>
        <li>
          <PersonIcon className="person" />
        </li>
        <li>
          <FavoriteIcon className="heart" />
        </li>
        <li>
          <Badge badgeContent={value.state} showZero color="primary">
            <ShoppingCartIcon className="cart" />
          </Badge>
        </li>
      </nav>
    </div>
  );
}
