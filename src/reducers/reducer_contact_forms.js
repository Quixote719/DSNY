import _ from "lodash";
import * as types from '../constants/ActionTypes';

export default function cardReducer(state = {}, action) {
  switch (action.type) {
    case types.FETCH_FORM_GET_COMPOST_REQUEST:
      return {
        ...state,
        formObject:action.payload.data
      };
    default:
      return state;
  }
}
