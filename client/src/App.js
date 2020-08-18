import React from "react";

import CustomNavbar from "./components/CustomNavbar";
import ProductsList from "./components/ProductsList";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <React.Fragment>
      <CustomNavbar />
      <ProductsList />
      <ShoppingCart />
    </React.Fragment>
  );
}

export default App;
