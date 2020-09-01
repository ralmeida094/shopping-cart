import React, { useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { connect } from "react-redux";
import { fetchItems } from "redux/shelf/actions";

import Product from "./product/Product";
import styles from "./Shelf.module.css";

Shelf.propTypes = {
  products: PropTypes.array.isRequired,
  fetchItems: PropTypes.func.isRequired,
};

function Shelf(props) {
  const { className, products, fetchItems } = props;

  const shelfClassName = classNames(className, styles.shelf);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return (
    <div className={shelfClassName}>
      {products.map((product, idx) => (
        <Product key={idx} product={product} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.shelf.items,
  isCartOpen: state.cart.isOpen,
});

export default connect(mapStateToProps, { fetchItems })(Shelf);
