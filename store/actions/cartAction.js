import * as actionTypes from "../actionTypes";

export const addToCart = (id) => ({
  type: actionTypes.ADD_TO_CART,
  payload: id,
});
export const incToCartItemCount = (id) => ({
  type: actionTypes.INC_TO_CART,
  payload: id,
});
export const decToCartItemCount = (id) => ({
  type: actionTypes.DEC_TO_CART,
  payload: id,
});
export const emptyTheCart = () => ({
  type: actionTypes.EMPTY_THE_CART,
});
