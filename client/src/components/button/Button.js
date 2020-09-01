import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./Button.module.css";

Button.propTypes = {
  buttonProps: PropTypes.object,
  variant: PropTypes.oneOf(["primary", "secondary", "text"]),
};

function Button(props) {
  const { className, buttonProps, variant = "primary" } = props;

  const classes = {
    primary: classNames(className, styles.button, styles.primary),
    secondary: classNames(className, styles.button, styles.secondary),
    text: classNames(className, styles.button, styles.text),
  };

  const variantClassName = classes[variant];

  return (
    <button className={variantClassName} {...buttonProps}>
      {props.children}
    </button>
  );
}

export default Button;
