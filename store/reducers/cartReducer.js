import * as actionTypes from "../actions/types";

const initialState = {
  list: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      let obj = state.list.find(
        coffee =>
          coffee.coffee === action.payload.coffee &&
          coffee.size === action.payload.size
      );
      console.log(obj);
      if (obj) {
        obj.quantity++;
        return {
          ...state
        };
      } else {
        return {
          ...state,
          list: state.list.concat(action.payload)
        };
      }
    case actionTypes.REMOVE_ITEM:
      return {
        ...state,
        list: state.list.filter(a => a !== action.payload)
      };
    case actionTypes.CHECKOUT:
      return {
        list: []
      };
    default:
      return state;
  }
}
