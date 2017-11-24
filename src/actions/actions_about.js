import axios from 'axios';
import { WORDPRESS_ROOT_URL, FETCH_LOCATION_LIST_URL } from '../constants/ApiConstants';
import * as types from '../constants/ActionTypes';

export function About() {
  const request = axios.get(`${WORDPRESS_ROOT_URL}dsny/v1/getPageData?name=about`);
  return {type: 'SET_ABOUT', payload: request};
}

export function Leadership() {
  const request = axios.get(`${WORDPRESS_ROOT_URL}dsny/v1/getPageData?name=leadership`);
  return {type: 'SET_LEADERSHIP', payload: request};
}

export function Bureaus() {
  const request = axios.get(`${WORDPRESS_ROOT_URL}dsny/v1/getPageData?name=bureaus`);
  return {type: 'SET_BUREAUS', payload: request};
}

export function StrategicPlan() {
  const request = axios.get(`${WORDPRESS_ROOT_URL}dsny/v1/getPageData?name=strategic-plan`);
  return {type: 'SET_STRATEGICPLAN', payload: request};
}

export function fetchLocationList() {
    const request = axios.get(FETCH_LOCATION_LIST_URL);
    return {type: types.FETCH_LOCATION_LIST, payload: request};
}

export function FetchFleet() {
    const request = axios.get(`${WORDPRESS_ROOT_URL}dsny/v1/getPageData?name=fleet`);
    return {type: 'SET_FLEET', payload: request}
}
export function FetchContactData() {
  const request = axios.get(`${WORDPRESS_ROOT_URL}dsny/v1/getPageData?name=contact`);
  return {type: 'SET_CONTACT_PAGE', payload: request}
}
export function FetchComplaintsData() {
  const request = axios.get(`${WORDPRESS_ROOT_URL}dsny/v1/getPageData?name=complaints`);
  return {type: 'SET_COMPLAINTS_PAGE', payload: request}
}

export function FetchCommissioner () {
    const request = axios.get(`${WORDPRESS_ROOT_URL}dsny/v1/getPageData?name=about-commissioner`);
    return {type: 'SET_COMMISSIONER', payload: request}
}
