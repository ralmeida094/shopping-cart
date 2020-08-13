import React from "react";
import classNames from "classnames";

import { connect } from "react-redux";
import { addProduct } from "../redux/actions/cart";

import placeholderImg from "../assets/images/250x350.png";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./Product.module.css";

export const Product = (props) => {
  const { className, id, name, price, tags } = props;

  const classes = {
    container: classNames(className, styles.container),
    productImg: styles.productImg,

    body: "text-center",
    title: "text-uppercase font-weight-light mb-1",

    text: "py-0",

    dollarSign: classNames(styles.dollarSign, "mr-1"),
    dollars: styles.dollars,
    cents: styles.cents,

    button: "w-100 rounded-0",
  };

  const [dollars, cents] = price.split(".");

  const handleAddToCart = () => {
    const product = { id, name, price, tags };

    props.addToCart(product);
  };

  return (
    <Card className={classes.container}>
      <Card.Img
        className={classes.productImg}
        src={placeholderImg}
        variant="top"
      />

      <Card.Body className={classes.body}>
        <Card.Title className={classes.title}>{name}</Card.Title>

        <Card.Text className={classes.text}>
          <b>
            <span className={classes.dollarSign}>$</span>
            <span className={classes.dollars}>{dollars}</span>
            <span>.</span>
            <span className={classes.priceCents}>{cents}</span>
          </b>
        </Card.Text>

        <Button
          className={classes.button}
          variant="dark"
          onClick={handleAddToCart}
        >
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (product) => dispatch(addProduct(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
