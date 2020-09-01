import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { connect } from "react-redux";
import { toggleCart } from "redux/cart/actions";

import Icon from "components/icon/Icon";
import Button from "components/button/Button";
import styles from "./Navbar.module.css";

Navbar.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  toggleCart: PropTypes.func.isRequired,
};

function Navbar(props) {
  const { className, itemsCount, toggleCart } = props;

  const navbarClassName = classNames(className, styles.navbar);

  const handleToggleCart = () => {
    toggleCart();
  };

  return (
    <nav className={navbarClassName}>
      <a className={styles.navBrand} href="/">
        Shopping Cart
      </a>
      <Button
        className={styles.cartButton}
        buttonProps={{ onClick: handleToggleCart }}
      >
        <Icon className={styles.cartIcon} name="shoppingCart" />
        <span>({itemsCount})</span>
      </Button>
    </nav>
  );
}

const mapStateToProps = (state) => ({
  itemsCount: state.cart.itemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
