import _ from "lodash";
import * as types from '../constants/ActionTypes';

export default function mediaReducer(state = {}, action) {
  switch (action.type) {
    case types.FETCH_MEDIA:
      return {
        ...state,
        [action.payload.data.id]: action.payload.data
      };
    default:
      return state;
  }
}
