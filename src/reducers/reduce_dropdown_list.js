import _ from "lodash";
import * as types from '../constants/ActionTypes';

export default function dropdownListReducer(state = [], action) {
  switch (action.type) {
    case types.DROPDOWN_LIST:
      return action.payload.data;
    default:
      return state;
  }
}
