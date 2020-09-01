import axios from "axios";

import { FETCH_ITEMS } from "./actionTypes";

export const fetchItems = () => async (dispatch) => {
  const url =
    "https://my-json-server.typicode.com/rafael-almeida/shopping-cart/products";
    
  const { data: items } = await axios.get(url);

  return dispatch({
    type: FETCH_ITEMS,
    payload: { items },
  });
};
