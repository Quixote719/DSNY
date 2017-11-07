import axios from 'axios';
import * as types from '../constants/ActionTypes';
import {
  MEDIAS_ALL_URL,
  MEDIA_URL,
  SUB_SECTION_HEADER_URL,
  FETCH_PRESS_RELEASE_DETAILS_URL,
  FETCH_PRESS_RELEASE_LIST_URL,
  FETCH_EVENTS_SUB_LIST_URL,
  FETCH_LANDING_PAGE_URL,
  FETCH_CARD_DETAILS_URL,
  FETCH_DROPDOWN_LIST,
  FETCH_BUREAUS_DETAILS_URL
} from '../constants/ApiConstants';

export function fetchLandinPageDetails(category) {
  return function(dispatch) {
    axios.get(FETCH_LANDING_PAGE_URL.replace(':category', category)).then((data) => {
      dispatch({type: types.RESOURCES_LANDING_SECTION, payload: data})

    })
  }
}

export function fetchCardDetails(category) {
  console.log(category);
  return function(dispatch) {
    dispatch({type: types.CARD_DETAILS, payload: {}})
    axios.get(FETCH_CARD_DETAILS_URL.replace(':category', category)).then((data) => {
      // debugger;
      dispatch({type: types.CARD_DETAILS, payload: data})
    })
  }
}

export function dropDownList(category) {
  return function(dispatch) {
    axios.get(FETCH_DROPDOWN_LIST.replace(':category', category)).then((data) => {
      dispatch({type: types.DROPDOWN_LIST, payload: data})
    })
  }
}

export function fetchPressReleaseDetails(slug) {
  return function(dispatch) {
    axios.get(FETCH_PRESS_RELEASE_DETAILS_URL.replace('id', slug)).then((data) => {
      dispatch({type: types.FETCH_PRESS_RELEASE_DETAILS, payload: data})
    })
  }
}

export function fetchPressReleaseList(year) {
  return function(dispatch) {
    axios.get(FETCH_PRESS_RELEASE_LIST_URL.replace(/:Year/g, year)).then((data) => {
      dispatch({type: types.FETCH_PRESS_RELEASE_LIST, payload: data})
    })
  }
}

export function fetchBureausDetails(slug) {
  return function(dispatch) {
    axios.get(FETCH_BUREAUS_DETAILS_URL.replace('id', slug)).then((data) => {
      dispatch({type: types.FETCH_BUREAUS_DETAILS, payload: data})
    })
  }
}

export function fetchmedia(id) {
  const request = axios.get(MEDIA_URL.replace('id', id));
  return {type: types.FETCH_MEDIA, payload: request};
}

export function fetchsubSectionHeader(id) {
  return function(dispatch) {
    axios.get(SUB_SECTION_HEADER_URL.replace('id', id)).then((data) => {
      let src = {};
      let temp = data.data[0]
      src['title'] = temp.title.rendered
      src['body'] = temp.content.rendered
      let featureImage = temp.feature_image.ID
      axios.get(MEDIA_URL.replace('id', featureImage)).then((media) => {
        src['imgSrc'] = media.data.source_url;
        dispatch({type: types.FETCH_SUB_SECTION_HEADER, payload: src})
      })
    })
  }
}
