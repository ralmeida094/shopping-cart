import React from "react";

import { connect } from "react-redux";

import Product from "./components/Product";

function App(props) {
  const { products } = props;

  return (
    <div>
      <ul>
        {products.map((product, idx) => {
          return <Product key={idx} {...product} />;
        })}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.shelf,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
