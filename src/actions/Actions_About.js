import axios from 'axios';
import { WORDPRESS_ROOT_URL } from '../constants/ApiConstants';

export function About() {
  const request = axios.get('http://dsnydev.wpengine.com/wp-json/dsny/v1/getPageData?name=about');
  return {type: 'SET_ABOUT', payload: request};
}

export function AboutSections() {
  const request = axios.get('http://dsnydev.wpengine.com/wp-json/wp_query/args?post_type=pagesection&cat=31&meta_key=rank&orderby=meta_value_num&order=ASC');
  console.log('Sections!!');
  console.log(request);
  return {type: 'SET_ABOUT_SECTIONS', payload: request};
}

export function AboutBureausDepartment(){
  const request = axios.get('http://dsnydev.wpengine.com/wp-json/wp_query/args?post_type=card&cat=32&order=ASC&meta_key=rank&orderby=meta_value_num');
  return {type: 'SET_ABOUT_BUREAUS_DP', payload: request};
}
