import { ADD_PRODUCT } from "../actionTypes";

import _data from "../_data";

const initialState = {
  products: [],
  subtotal: 0.0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      const product = action.payload;
      return {
        ...state,
        products: [...state.products, product],
        subtotal: state.subtotal + Number(product.price),
      };

    default:
      return state;
  }
}
