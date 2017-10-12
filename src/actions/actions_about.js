import axios from 'axios';
import { WORDPRESS_ROOT_URL } from '../constants/ApiConstants';

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
