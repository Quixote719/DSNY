import axios from 'axios';
import { WORDPRESS_ROOT_URL, FETCH_LOCATION_LIST_URL } from '../constants/ApiConstants';
import * as types from '../constants/ActionTypes';

export function Services() {
    return function (dispatch) {
      axios.get(`${WORDPRESS_ROOT_URL}dsny/v1/getPageData?name=services`).then((request) => {
          dispatch({type: 'SET_SERVICES',payload: request.data})
      })
}}
