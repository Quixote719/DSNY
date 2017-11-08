import axios from 'axios';
import * as types from '../constants/ActionTypes';
import {
  FETCH_FORM_GET_COMPOST_REQUEST_URL,
  FETCH_FORM_GET_COMMERCIAL_ORGANICS_REQUEST_URL
} from '../constants/ApiConstants';


export function fetchFormObject(category) {

  return function(dispatch) {
    dispatch({type: types.CARD_DETAILS, payload: {}})
    axios.get(FETCH_FORM_GET_COMPOST_REQUEST_URL).then((data) => {

      dispatch({type: types.FETCH_FORM_GET_COMPOST_REQUEST, payload: data})
    }).catch(function (error) {
      console.log('yesh');
      console.log(JSON.stringify(error))
      dispatch({type: types.ERROR_LOADING_REQUEST, payload:error})
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
  });
  }
}

export function fetchOrganicsForm(category) {

  return function(dispatch) {
    dispatch({type: types.CARD_DETAILS, payload: {}})
    axios.get(FETCH_FORM_GET_COMMERCIAL_ORGANICS_REQUEST_URL).then((data) => {

      dispatch({type: types.FETCH_FORM_GET_COMMERCIAL_ORGANICS_REQUEST, payload: data})
    }).catch(function (error) {
      console.log('Daniel');
      console.log(JSON.stringify(error))
      dispatch({type: types.ERROR_LOADING_REQUEST, payload:error})
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
  });
  }
}
