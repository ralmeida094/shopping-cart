import React from "react";
import classNames from "classnames";

import { connect } from "react-redux";
import { toggleCart } from "../redux/actions/cart";

import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import Icon from "./Icon";

export const CustomNavbar = (props) => {
  const { className, toggleCart, numberOfProducts } = props;

  const classes = {
    navbar: classNames(className, "mb-3 px-5 py-3 border-bottom shadow-sm"),
    cartButton: "d-block ml-auto",
    shoppingCartIcon: "mr-1",
  };

  const handleToggleCart = () => {
    toggleCart();
  };

  return (
    <Navbar className={classes.navbar}>
      <Navbar.Brand href="#">shopping cart</Navbar.Brand>

      <Button
        className={classes.cartButton}
        onClick={handleToggleCart}
        variant="dark"
      >
        <Icon className={classes.shoppingCartIcon} name="shoppingCart" />
        <span>({numberOfProducts})</span>
      </Button>
    </Navbar>
  );
};

const mapStateToProps = (state) => ({
  numberOfProducts: state.cart.numberOfProducts,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomNavbar);
