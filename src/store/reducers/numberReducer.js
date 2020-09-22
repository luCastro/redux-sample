import { UPDATED_MIN_NUMBER, UPDATED_MAX_NUMBER } from "../actions/actionTypes";

const initialState = {
  min: 0,
  max: 10,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATED_MIN_NUMBER:
      return {
        ...state,
        min: action.payload,
      };

    case UPDATED_MAX_NUMBER:
      return {
        ...state,
        max: action.payload,
      };
    default:
      return state;
  }
}
