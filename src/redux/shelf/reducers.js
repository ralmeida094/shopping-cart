import { FETCH_ITEMS } from "./actionTypes";

const initialState = {
  items: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEMS:
      const { items } = action.payload;
      return { ...state, items };

    default:
      return state;
  }
}
