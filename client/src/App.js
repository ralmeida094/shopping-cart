import React from "react";

import { connect } from "react-redux";

function App(props) {
  const { products } = props;

  return (
    <div>
      <ul>
        {products.map((product, idx) => {
          return (
            <li key={idx}>
              <div>id: {product.id}</div>
              <div>name: {product.name}, </div>
              <div>price: {product.price}</div>
              <div>tags: {product.tags}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
