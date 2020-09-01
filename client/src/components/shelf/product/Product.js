import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { connect } from "react-redux";
import { addItem } from "redux/cart/actions";

import Button from "components/button/Button";
import styles from "./Product.module.css";

Product.propTypes = {
  product: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
};

function Product(props) {
  const { className, product, addToCart } = props;

  const { title, author, price, imageSrc } = product;

  const productClassName = classNames(className, styles.productContainer);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className={productClassName}>
      <img className={styles.productImage} alt="" src={imageSrc} />

      <div className={styles.productDetails}>
        <div className={styles.productText}>
          <b>{title}</b>
        </div>
        <div className={styles.productText}>
          <i>{author}</i>
        </div>
        <div className={styles.productText}>$ {price}</div>
      </div>

      <Button
        className={styles.addToCartButton}
        buttonProps={{ onClick: handleAddToCart }}
      >
        Add To Cart
      </Button>
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (product) => dispatch(addItem(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
