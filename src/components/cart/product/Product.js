import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { connect } from "react-redux";
import { removeItem, updateQuantity } from "redux/cart/actions";

import ButtonIcon from "components/button/ButtonIcon";
import styles from "./Product.module.css";

Product.propTypes = {
  product: PropTypes.object.isRequired,
  quantity: PropTypes.number.isRequired,
  removeItem: PropTypes.func.isRequired,
  updateQuantity: PropTypes.func.isRequired,
};

function Product(props) {
  const { className, product, quantity, removeItem, updateQuantity } = props;

  const { title, price, imageSrc } = product;

  const productClassName = classNames(className, styles.productContainer);

  const handleDelete = () => {
    removeItem(product);
  };

  const handleQuantityIncrease = () => {
    updateQuantity({ ...product, quantity: quantity + 1 });
  };

  const handleQuantityDecrease = () => {
    quantity <= 1
      ? removeItem(product)
      : updateQuantity({ ...product, quantity: quantity - 1 });
  };

  return (
    <div className={productClassName}>
      <img className={styles.productImage} alt="" src={imageSrc} />

      <div className={styles.productDetails}>
        <ButtonIcon
          className={styles.deleteButton}
          buttonProps={{ onClick: handleDelete }}
          variant="text"
          iconName="x"
        />

        <div className={styles.productText}>
          <span className={styles.productTitle}>{title}</span>
        </div>

        <div className={styles.productText}>
          <span>$ {price}</span>
        </div>

        <div>
          <ButtonIcon
            name="decrease"
            buttonProps={{ onClick: handleQuantityDecrease }}
            iconName="minus"
          />

          <span className={styles.productQuantity}>{quantity}</span>

          <ButtonIcon
            buttonProps={{ onClick: handleQuantityIncrease }}
            iconName="plus"
          />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  removeItem: (product) => dispatch(removeItem(product)),
  updateQuantity: (id, quantity) => dispatch(updateQuantity(id, quantity)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
