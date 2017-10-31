import axios from 'axios';
import { WORDPRESS_ROOT_URL, FETCH_LOCATION_LIST_URL } from '../constants/ApiConstants';
import * as types from '../constants/ActionTypes';

export function Services() {
  const request = axios.get(`${WORDPRESS_ROOT_URL}dsny/v1/getPageData?name=services`);
  return {type: 'SET_SERVICES', payload: request};
}
