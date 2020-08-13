import React from "react";

import { ReactComponent as Search } from "../assets/icons/search.svg";
import { ReactComponent as ShoppingCart } from "../assets/icons/shopping-cart.svg";

function Icon(props) {
  const { className, iconProps, name } = props;

  const lookupTable = {
    search: <Search {...iconProps} className={className} />,
    shoppingCart: <ShoppingCart {...iconProps} className={className} />,
  };

  return lookupTable[name] || new Error("Invalid icon name");
}

export default Icon;
