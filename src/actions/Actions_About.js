import axios from 'axios';

export function AboutData() {
  const request = axios.get('http://dsnydev.wpengine.com/wp-json/wp/v2/pages/?slug=about-dsny');
  return {type: 'SET_ABOUT_TITLE', payload: request};
}

export function AboutLeadership() {
    return function (dispatch) {
        axios.get('http://dsnydev.wpengine.com/wp-json/wp/v2/pagesection/?slug=leadership')
            .then((response) => {
                dispatch({ type: 'SET_ABOUT_LEADERSHIP', payload: response.data});
                let ProfileId = response.data[0].feature_image.ID;
                axios.get('http://dsnydev.wpengine.com/wp-json/wp/v2/media/' + ProfileId)
                .then((response)=>{
                  dispatch({ type: 'SET_ABOUT_LEADERSHIP_IMAGE', payload: response.data});
                })
            })
    }
}

export function AboutBureaus() {
  const request = axios.get('http://dsnydev.wpengine.com/wp-json/wp/v2/pages?slug=bureaus');
  return {type: 'SET_ABOUT_BUREAUS', payload: request};
}

export function AboutStrategicPlan() {
  const request = axios.get('http://dsnydev.wpengine.com/wp-json/wp/v2/pagesection?slug=strategic-plan');
  return {type: 'SET_ABOUT_STRATEGICPLAN', payload: request};
}

export function AboutFoundation() {
  const request = axios.get('http://dsnydev.wpengine.com/wp-json/wp/v2/pagesection?slug=foundation');
  return {type: 'SET_ABOUT_FOUNDATION', payload: request};
}

export function AboutLocations() {
  const request = axios.get('http://dsnydev.wpengine.com/wp-json/wp/v2/pagesection?slug=locations');
  return {type: 'SET_ABOUT_LOCATIONS', payload: request};
}

export function AboutOperations() {
  const request = axios.get('http://dsnydev.wpengine.com/wp-json/wp/v2/pagesection?slug=operations');
  return {type: 'SET_ABOUT_OPERATIONS', payload: request};
}
