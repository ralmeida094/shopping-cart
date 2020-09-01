import {
  TOGGLE_CART,
  ADD_ITEM,
  REMOVE_ITEM,
  UPDATE_QUANTITY,
} from "./actionTypes";

const initialState = {
  isOpen: false,
  items: [],
  itemsCount: 0,
  subtotal: 0.0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_CART:
      return { ...state, isOpen: !state.isOpen };

    case ADD_ITEM: {
      const added = action.payload;

      const items = addItem(state.items, added);

      const subtotal = roundNearest(
        Number(state.subtotal) + Number(added.price)
      );

      return {
        ...state,
        items,
        itemsCount: state.itemsCount + 1,
        subtotal,
      };
    }

    case REMOVE_ITEM: {
      const removed = action.payload;

      const items = state.items.filter((item) => item.id !== removed.id);

      const subtotal = roundNearest(
        Number(state.subtotal) - Number(removed.price) * removed.quantity
      );

      return {
        ...state,
        items,
        itemsCount: state.itemsCount - removed.quantity,
        subtotal,
      };
    }

    case UPDATE_QUANTITY: {
      const updated = action.payload;

      let quantityDiff;

      const items = state.items.map((item) => {
        if (item.id === updated.id) {
          quantityDiff = item.quantity - updated.quantity;
          return updated;
        }

        return item;
      });

      const subtotal = roundNearest(
        Number(state.subtotal) - Number(updated.price) * quantityDiff
      );

      return {
        ...state,
        items,
        itemsCount: state.itemsCount - quantityDiff,
        subtotal,
      };
    }

    default:
      return state;
  }
}

const roundNearest = (number, numOfDecimals = 2) => {
  var r = Math.pow(10, numOfDecimals);
  return Math.round((number + Number.EPSILON) * r) / r;
};

function addItem(items, item) {
  const arr = items.slice();

  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];

    if (curr.id === item.id) {
      curr.quantity += 1;
      return arr;
    }
  }

  return [...arr, { ...item, quantity: 1 }];
}
