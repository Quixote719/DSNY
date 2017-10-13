import _ from "lodash";
import * as types from '../constants/ActionTypes';

export default function cardReducer(state = [], action) {
  switch (action.type) {
    case types.CARD_DETAILS:
      return [action.payload.data];
    default:
      return state;
  }
}
