export const initalState = {
  basket: [],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => amount + item.price, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case 'REMOVE_TO_BASKET':
      const removeItem = state.basket.filter(
        (basketItem) => basketItem.id !== action.id,
      );
      return {
        ...state,
        basket: removeItem,
      };

    default:
      return state;
  }
};

export default reducer;
