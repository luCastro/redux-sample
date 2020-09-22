import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
  numbers: function (state, action) {
    switch (action.type) {
      case "UPDATED_MIN_NUMBER":
        return {
          ...state,
          min: action.payload,
        };

      case "UPDATED_MAX_NUMBER":
        return {
          ...state,
          max: action.payload,
        };
      default:
        return {
          min: 0,
          max: 10,
        };
    }
  },
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
