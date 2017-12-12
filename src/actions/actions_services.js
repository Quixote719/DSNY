import axios from 'axios';
import { WORDPRESS_ROOT_URL, FETCH_ELECTRONICS_LOCATION_LIST_URL, FETCH_FOODSCRAP_LOCATION_LIST_URL, FETCH_HARMFULPRODUCT_LOCATION_LIST_URL } from '../constants/ApiConstants';
import * as types from '../constants/ActionTypes';

export function Services() {
    return function (dispatch) {
      axios.get(`${WORDPRESS_ROOT_URL}dsny/v1/getPageData?name=services`).then((request) => {
          dispatch({type: 'SET_SERVICES',payload: request.data})
      })
}}

export function fetchElectronicsList() {
    const request = axios.get(FETCH_ELECTRONICS_LOCATION_LIST_URL);
    return {type: 'SET_ELECTRONICS_LOCATIONS', payload: request};
}

export function electronicsMapPage() {
  const request = axios.get(`${WORDPRESS_ROOT_URL}dsny/v1/getPageData?name=electronics-drop-off-locations`);
  return {type: 'SET_ELECTRONICS_CONTENT', payload: request};
}

export function fetchFoodScrapList() {
    const request = axios.get(FETCH_FOODSCRAP_LOCATION_LIST_URL);
    return {type: 'SET_FOODSCRAP_LOCATIONS', payload: request};
}

export function foodScrapMapPage() {
  const request = axios.get(`${WORDPRESS_ROOT_URL}dsny/v1/getPageData?name=food-scraps-and-yard-waste-page`);
  return {type: 'SET_FOODSCRAP_CONTENT', payload: request};
}

export function fetchHarmfulProductList() {
    const request = axios.get(FETCH_HARMFULPRODUCT_LOCATION_LIST_URL);
    return {type: 'SET_HARMFUL_PRODUCT_LOCATIONS', payload: request};
}

export function harmfulProductMapPage() {
  const request = axios.get(`${WORDPRESS_ROOT_URL}dsny/v1/getPageData?name=harmful-products`);
  return {type: 'SET_HARMFUL_PRODUCT_CONTENT', payload: request};
}
