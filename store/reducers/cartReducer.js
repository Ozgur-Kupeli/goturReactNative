import * as actionTypes from "../actionTypes";
import initialState from "../initialState";

export default function cartReducer(state = initialState.cart, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return [...state, action.payload];

    case actionTypes.INC_TO_CART:
      return [...state, action.payload];

    case actionTypes.DEC_TO_CART:
      const productIndex = state.findIndex((i) => i === action.payload);
      const newState = state.filter((i, index) => index !== productIndex);
      return newState;
    case actionTypes.EMPTY_THE_CART:
      return [];

    default:
      return state;
  }
}
