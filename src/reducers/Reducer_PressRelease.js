import _ from "lodash";
import * as types from '../constants/ActionTypes';
import initStore from './store';

export default function(state = initStore, action) {
  switch (action.type) {
    case types.FETCH_PRESS_RELEASE_DETAILS:
      return {
        ...state,
        pressRelease: {
          ...state.pressRelease,
          details: _.mapKeys(action.payload.data, "id")
        }
      };
    case types.FETCH_PRESS_RELEASE_LIST:
      return {
        ...state,
        pressRelease: {
          ...state.pressRelease,
          list: _.mapKeys(action.payload.data, "id")
        }
      };
    default:
      return state;
  }
}
