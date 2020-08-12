import _data from "../_data";

const initialState = _data.getFakeProducts(10);

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
