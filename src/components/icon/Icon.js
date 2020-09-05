import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { ReactComponent as Minus } from "assets/icons/minus.svg";
import { ReactComponent as Plus } from "assets/icons/plus.svg";
import { ReactComponent as Search } from "assets/icons/search.svg";
import { ReactComponent as ShoppingCart } from "assets/icons/shopping-cart.svg";
import { ReactComponent as X } from "assets/icons/x.svg";

import styles from "./Icon.module.css";

Icon.propTypes = {
  iconProps: PropTypes.object,
  name: PropTypes.oneOf(["minus", "plus", "search", "shoppingCart", "x"])
    .isRequired,
};

function Icon(props) {
  const { className, iconProps, name } = props;

  const iconClassName = classNames(className, styles.icon);

  const lookupTable = {
    minus: <Minus {...iconProps} className={iconClassName} />,
    plus: <Plus {...iconProps} className={iconClassName} />,
    search: <Search {...iconProps} className={iconClassName} />,
    shoppingCart: <ShoppingCart {...iconProps} className={iconClassName} />,
    x: <X {...iconProps} className={iconClassName} />,
  };

  return lookupTable[name] || new Error("Invalid icon name");
}

export default Icon;
