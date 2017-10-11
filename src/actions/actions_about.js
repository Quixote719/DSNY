import axios from 'axios';
import { WORDPRESS_ROOT_URL } from '../constants/ApiConstants';

export function About() {
  const request = axios.get(`${WORDPRESS_ROOT_URL}dsny/v1/getPageData?name=about`);
  return {type: 'SET_ABOUT', payload: request};
}

export function StrategicPlan() {
  const request = axios.get(`${WORDPRESS_ROOT_URL}dsny/v1/getPageData?name=strategic-plan`);
  return {type: 'SET_STRATEGICPLAN', payload: request};
}
