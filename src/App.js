import React from "react";

import Navbar from "components/navbar/Navbar";
import Shelf from "components/shelf/Shelf";
import Cart from "components/cart/Cart";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Shelf />
      <Cart />
    </React.Fragment>
  );
}

export default App;
