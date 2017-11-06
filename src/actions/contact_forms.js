import axios from 'axios';
import * as types from '../constants/ActionTypes';
import {

  FETCH_FORM_GET_COMPOST_REQUEST_URL
} from '../constants/ApiConstants';


export function fetchFormObject(category) {

  return function(dispatch) {
    dispatch({type: types.CARD_DETAILS, payload: {}})
    axios.get(FETCH_FORM_GET_COMPOST_REQUEST_URL).then((data) => {

      dispatch({type: types.FETCH_FORM_GET_COMPOST_REQUEST, payload: data})
    })
  }
}
