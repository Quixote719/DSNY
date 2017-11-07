import _ from "lodash";
import * as types from '../constants/ActionTypes';


function searchObj (obj, query, replace) {

    for (var key in obj) {
        var value = obj[key];
        if (value === query) {
            obj[key] = replace
        }

    }
return obj
}

export default function cardReducer(state = {}, action) {
  switch (action.type) {
    case types.FETCH_FORM_GET_COMPOST_REQUEST:

      return {
        ...state,
        formObject:searchObj(action.payload.data, false, null)
      };
    default:
      return state;
  }
}