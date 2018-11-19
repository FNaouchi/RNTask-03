import axios from "axios";

// Types
import * as actionTypes from "./types";

// Get all coffeeShops
export const getCoffeeShops = () => dispatch => {
  dispatch(setCoffeeShopsLoading());
  axios
    .get("http://coffee.q8fawazo.me/api/?format=json")
    .then(res => res.data)
    .then(coffeeshops => {
      dispatch({
        type: actionTypes.GET_COFFEESHOPS,
        payload: coffeeshops
      });
    })
    .catch(err => console.error("Error while fetching coffeeshops", err));
};

export const addItemToCart = (coffee, size) => ({
  type: actionTypes.ADD_ITEM,
  payload: { coffee: coffee, size: size, quantity: 1 }
});

export const removeItemFromCart = item => ({
  type: actionTypes.REMOVE_ITEM,
  payload: item
});

export const checkoutCart = () => ({
  type: actionTypes.CHECKOUT
});

// Set the loading state
export const setCoffeeShopsLoading = () => ({
  type: actionTypes.COFFEESHOPS_LOADING
});
