import * as actionTypes from "../actionTypes";

export const addCompletedOrder = (obj) => ({
  type: actionTypes.SET_COMPLETED_ORDER,
  payload: obj,
});
