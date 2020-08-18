import {
  TOGGLE_CART,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  UPDATE_QUANTITY,
} from "../actionTypes";

const initialState = {
  isOpen: true,
  products: [],
  numberOfProducts: 0,
  subtotal: 0.0,
};

function addProduct(oldProducts, newProduct) {
  const products = [...oldProducts];

  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    if (product.id === newProduct.id) {
      product.quantity += 1;
      return products;
    }
  }

  return [...products, { ...newProduct, quantity: 1 }];
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT: {
      const products = state.products;
      const { product } = action.payload;

      return {
        ...state,
        products: addProduct(products, product),
        subtotal: state.subtotal + Number(product.price),
        numberOfProducts: state.numberOfProducts + 1,
      };
    }

    case REMOVE_PRODUCT: {
      const { id, price } = action.payload;

      return {
        ...state,
        products: state.products.filter((product) => product.id !== id),
        subtotal: Number(state.subtotal) - Number(price),
        numberOfProducts: state.numberOfProducts - 1,
      };
    }

    case UPDATE_QUANTITY: {
      const { id, quantity } = action.payload;
      let difference = {
        price: 0,
        quantity: 0,
      };

      return {
        ...state,
        products: state.products.map((product) => {
          // TODO: Refactor this...
          if (product.id === id) {
            difference.quantity = product.quantity - quantity;
            difference.price = product.price * difference.quantity;
            product.quantity = quantity;
          }
          return product;
        }),
        subtotal: state.subtotal - difference.price,
        numberOfProducts: state.numberOfProducts - difference.quantity,
      };
    }

    case TOGGLE_CART:
      return {
        ...state,
        isOpen: !state.isOpen,
      };

    default:
      return state;
  }
}
