import _ from "lodash";
import * as types from '../constants/ActionTypes';

export default function ServicesDataReducer(state = { bureaus: {} }, action) {
  switch (action.type) {
    case 'SET_SERVICES':
      return { ...state, ServicesData: action.payload};
    default:
      return state;
  }
}
