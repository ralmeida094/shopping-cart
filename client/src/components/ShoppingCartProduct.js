import React, { useState } from "react";
import classNames from "classnames";

import { connect } from "react-redux";
import { updateQuantity, removeProduct } from "../redux/actions/cart";

import placeholderImg from "../assets/images/100x150.png";
import styles from "./ShoppingCartProduct.module.css";

function ShoppingCartProduct(props) {
  const { className, id, name, price, quantity } = props;

  const [hovering, setHovering] = useState(false);

  const classes = {
    container: classNames(className, "d-flex align-items-center text-light"),
    table: "w-100",
    row: "d-flex align-items-center justify-content-between w-100",
    productImg: "mr-3",
    closeButton: classNames(
      styles.deleteButton,
      hovering ? "visible" : "invisible"
    ),
    productName: classNames(
      styles.productName,
      "font-weight-light text-uppercase"
    ),
    productQty: "mx-2",
    productPrice: "text-warning",
    dollarSign: styles.dollarSign,
    priceCents: styles.priceCents,
    quantityButton: classNames(styles.quantityButton),
  };

  const [dollars, cents] = price.split(".");

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  const handleQuantityUpdate = (e) => {
    const { name } = e.target;

    let newQuantity = quantity;

    if (name === "increase") newQuantity = quantity + 1;
    if (name === "decrease") newQuantity = quantity - 1;

    newQuantity < 1
      ? props.removeProduct(id, price)
      : props.updateQuantity(id, newQuantity);
  };

  return (
    <div
      className={classes.container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className={classes.productImg} alt="" src={placeholderImg} />

      <div className={classes.table}>
        <div className={classes.row}>
          <button className={classes.closeButton}>X</button>
        </div>
        <div className={classes.row}>
          <span className={classes.productName}>{name}</span>
          <span className={classes.productPrice}>
            <span className={classes.dollarSign}>$</span>
            <span className={classes.dollars}>{dollars}</span>
            <span>.</span>
            <span className={classes.priceCents}>{cents}</span>
          </span>
        </div>

        <div className={classes.row}>
          <span>Quantity</span>
          <span>
            <button
              name="decrease"
              className={classes.quantityButton}
              onClick={handleQuantityUpdate}
            >
              -
            </button>
            <span className={classes.productQty}>{quantity}</span>
            <button
              name="increase"
              className={classes.quantityButton}
              onClick={handleQuantityUpdate}
            >
              +
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  removeProduct: (id, price) => dispatch(removeProduct(id, price)),
  updateQuantity: (id, quantity) => dispatch(updateQuantity(id, quantity)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCartProduct);
