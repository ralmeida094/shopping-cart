import {
  TOGGLE_CART,
  ADD_ITEM,
  REMOVE_ITEM,
  UPDATE_QUANTITY,
} from "./actionTypes";

export const toggleCart = () => {
  return {
    type: TOGGLE_CART,
  };
};

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export const removeItem = (item) => {
  return {
    type: REMOVE_ITEM,
    payload: item,
  };
};

export const updateQuantity = (item) => {
  return {
    type: UPDATE_QUANTITY,
    payload: item,
  };
};
