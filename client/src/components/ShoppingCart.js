import React from "react";
import classNames from "classnames";

import { connect } from "react-redux";
import { toggleCart } from "../redux/actions/cart";

import Button from "react-bootstrap/Button";

import ShoppingCartProduct from "./ShoppingCartProduct";
import styles from "./ShoppingCart.module.css";

export const ShoppingCart = (props) => {
  const { className, isOpen, toggleCart, products, subtotal } = props;

  const classes = {
    container: classNames(
      className,
      styles.container,
      isOpen ? "d-flex" : "d-none",
      "flex-column p-3 bg-dark"
    ),
    productsList: classNames(styles.productsList, "flex-grow-1 overflow-auto"),
    product: "my-3",
    closeButton: classNames(
      styles.closeButton,
      "d-flex p-0 align-items-center justify-content-center rounded-0"
    ),
    footer: "border-top",
    subtotal: "d-flex justify-content-between",
    subtotalLabel: "text-uppercase text-light",
    subtotalValue: "text-right text-warning",
    checkoutButton: "w-100 text-uppercase rounded-0",
  };

  const handleClose = () => {
    toggleCart();
  };

  const handleCheckout = () => {
    toggleCart();

    const total = Number(subtotal).toFixed(2);
    alert(`Your total is $${total}`);
  };

  return (
    <div className={classes.container}>
      <Button
        className={classes.closeButton}
        variant="dark"
        onClick={handleClose}
      >
        X
      </Button>

      <div className={classes.productsList}>
        {products.map((product, idx) => (
          <ShoppingCartProduct
            key={idx}
            className={classes.product}
            {...product}
          />
        ))}
      </div>

      <div className={classes.footer}>
        <p className={classes.subtotal}>
          <span className={classes.subtotalLabel}>Subtotal</span>
          <span className={classes.subtotalValue}>${subtotal}</span>
        </p>

        <Button
          className={classes.checkoutButton}
          variant="light"
          onClick={handleCheckout}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.cart.products,
  subtotal: state.cart.subtotal,
  isOpen: state.cart.isOpen,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
