import _ from "lodash";
import * as types from '../constants/ActionTypes';

export default function(state = {
  landing: {},
  pressRelease: {}
}, action) {
  switch (action.type) {
    case types.RESOURCES_LANDING_SECTION:
      return {
        ...state,
        landing: {
          ...state.landing,
          [action.payload.data.id]: action.payload.data
        }
      };
    case types.FETCH_PRESS_RELEASE_LIST:
      return {
        ...state,
        pressRelease: {
          ...state.pressRelease,
          list: action.payload.data
        }
      };
    case types.FETCH_PRESS_RELEASE_DETAILS:
      return {
        ...state,
        pressRelease: {
          ...state.pressRelease,
          details: _.mapKeys(action.payload.data, "id")
        }
      };
    default:
      return state;
  }
}
