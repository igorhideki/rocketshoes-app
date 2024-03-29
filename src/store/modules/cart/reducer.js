function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return [...state, action.product];

    case '@cart/REMOVE':
      return state.filter(product => product.id !== action.id);

    case '@cart/UPDATE_AMOUNT_SUCCESS':
      return state.map(product => {
        if (product.id === action.id) {
          return { ...product, amount: action.amount };
        }
        return product;
      });
    default:
      return state;
  }
}

export default cart;
