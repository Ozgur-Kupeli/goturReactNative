import * as actionTypes from "../actionTypes";
import initialState from "../initialState";

export default function completedOrderReducer(
  state = initialState.completedOrders,
  action
) {
  switch (action.type) {
    case actionTypes.SET_COMPLETED_ORDER:
      return [...state, action.payload];
    default:
      return state;
  }
}
