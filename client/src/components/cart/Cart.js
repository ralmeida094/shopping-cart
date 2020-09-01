import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { connect } from "react-redux";
import { toggleCart } from "redux/cart/actions";

import Button from "components/button/Button";
import ButtonIcon from "components/button/ButtonIcon";
import Product from "./product/Product";
import styles from "./Cart.module.css";

Cart.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  subtotal: PropTypes.number.isRequired,
  toggleCart: PropTypes.func.isRequired,
};

function Cart(props) {
  const { className, isOpen, products, subtotal, toggleCart } = props;

  const cartClassName = classNames(
    className,
    styles.cartContainer,
    isOpen ? styles.cartOpen : styles.cartClosed
  );

  const handleClose = () => {
    toggleCart();
  };

  const handleCheckout = () => {
    toggleCart();

    const total = Number(subtotal).toFixed(2);
    alert(`Your total is $${total}`);
  };

  return (
    <div className={cartClassName}>
      <div className={styles.cartHeader}>
        <span className={styles.sectionTitle}>Shopping Cart</span>

        <ButtonIcon
          className={styles.closeButton}
          buttonProps={{ onClick: handleClose }}
          iconName="x"
        />
      </div>

      <div className={styles.cartProducts}>
        {products.map((product, idx) => (
          <Product key={idx} className={styles.product} product={product} quantity={product.quantity}/>
        ))}
      </div>

      <div className={styles.cartFooter}>
        <div className={styles.subtotal}>
          <span>Subtotal</span>
          <span>$ {subtotal}</span>
        </div>

        <Button
          className={styles.checkoutButton}
          buttonProps={{ onClick: handleCheckout }}
          variant="secondary"
        >
          Checkout
        </Button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isOpen: state.cart.isOpen,
  products: state.cart.items,
  subtotal: state.cart.subtotal,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
