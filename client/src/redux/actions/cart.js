import {
  TOGGLE_CART,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  UPDATE_QUANTITY,
} from "../actionTypes";

export const toggleCart = () => {
  console.log("toggleCart");

  return {
    type: TOGGLE_CART,
  };
};

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: { product },
  };
};

export const removeProduct = (id, price) => {
  return {
    type: REMOVE_PRODUCT,
    payload: { id, price },
  };
};

export const updateQuantity = (id, quantity) => {
  return {
    type: UPDATE_QUANTITY,
    payload: { id, quantity },
  };
};
