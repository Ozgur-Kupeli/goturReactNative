import * as actionTypes from "../actionTypes";
import initialState from "../initialState";
import { products } from "../../utils/products";

export default function selectedProductReducer(
  state = initialState.selectedProduct,
  action
) {
  switch (action.type) {
    case actionTypes.SELECTED_PRODUCT:
      const filterSelectedProduct = products.filter(
        (i) => i.id === action.payload
      )[0];
      return {
        ...state,
        id: filterSelectedProduct.id,
        description: filterSelectedProduct.description,
        image: filterSelectedProduct.image,
        name: filterSelectedProduct.name,
        price: filterSelectedProduct.price,
      };

    default:
      return state;
  }
}
