import axios from 'axios';
import * as types from '../constants/ActionTypes';
import {

  FETCH_FORM_GET_COMPOST_REQUEST_URL,
  PSOT_FORM_COMPOST_REQUEST_URL
} from '../constants/ApiConstants';


export function fetchFormObject(category) {

  return function(dispatch) {
    dispatch({type: types.FETCH_FORM_GET_COMPOST_REQUEST, payload: {}})
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



export function postFormObject(formObject) {
  return function(dispatch) {
    dispatch({type: types.POST_FORM_COMPOST_REQUEST, payload: {}})

    axios({
        method: 'post',
        url: PSOT_FORM_COMPOST_REQUEST_URL,
        data: formObject,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    }).then((data) => {

      dispatch({type: types.POST_FORM_COMPOST_REQUEST, payload: data})
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
