
import * as types from '../constants/ActionTypes';

export default function errorReducer(state = {}, action) {
  switch (action.type) {
    case types.ERROR_LOADING_REQUEST:
    debugger;
    console.log(action.payload.data);
      return {
        ...state,
        type:action.payload.data
      };
    default:
      return state;
  }
}
