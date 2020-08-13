import React from "react";
import classNames from "classnames";

import { connect } from "react-redux";

import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import Icon from "./Icon";

export const CustomNavbar = (props) => {
  const { className, toggleCart, numOfItems } = props;

  const classes = {
    navbar: classNames(className, "mb-3 px-5 py-3 border-bottom shadow-sm"),
    cartButton: "d-block ml-auto",
    shoppingCartIcon: "mr-1",
  };

  return (
    <Navbar className={classes.navbar}>
      <Navbar.Brand href="#">shopping cart</Navbar.Brand>

      <Button
        className={classes.cartButton}
        onClick={toggleCart}
        variant="dark"
      >
        <Icon className={classes.shoppingCartIcon} name="shoppingCart" />
        <span>({numOfItems})</span>
      </Button>
    </Navbar>
  );
};

const mapStateToProps = (state) => ({
  numOfItems: state.cart.products.length,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CustomNavbar);
