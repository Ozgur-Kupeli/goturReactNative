import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import completedOrderReducer from "./reducers/completedOrderReducer";
import selectedProductReducer from "./reducers/selectedProductReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  selectedProduct: selectedProductReducer,
  completedOrders: completedOrderReducer,
});
export default rootReducer;
