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
  FETCH_PAGE_DATA_URL,
  FETCH_DROPDOWN_LIST,
  FETCH_BUREAUS_DETAILS_URL
} from '../constants/ApiConstants';

/**
 * Deprecated - this needs to be converted use the new methodology of fetchPageData.
 * Once the changeover is made, remove this method, and remove FETCH_LANDING_PAGE_URL constant.
 *
 * Used by Resources_container.js
 */
export function fetchLandinPageDetails(slug) {
  return function(dispatch) {
    axios.get(FETCH_LANDING_PAGE_URL.replace(':slug', slug)).then((data) => {
      dispatch({type: types.RESOURCES_LANDING_SECTION, payload: data})

    })
  }
}

export function fetchPageData(slug) {
  console.log(slug);
  return function(dispatch) {
    dispatch({type: types.POST_FORM_REQUEST, payload: {}})
    dispatch({type: types.GET_UNAVAILABLE_DATES, payload: {}})
    dispatch({type: types.TEN_PLUS_BUILDINGS_STATUS, payload: {}})
    dispatch({type: types.IS_DISTRICT_ACTIVE, payload: {}})
     dispatch({
                type: 'SET_COLLECTION_SCHEDULE_DATA',
                commercialAddress: null,
                DSNYGeoCoder: null,
                collectionScheduleInfo: null,
                payload: null,
                routingData: null,
                arrayLength: null,
                holidayData: null,
                noResultsError: null,
                suggestionAddress: null,
                })

      dispatch({
            type: 'SET_ADDRESS_VALIDATOR_FLAG',
            payload: null,
        })
    dispatch({type: types.CARD_DETAILS, payload: {}})
    axios.get(FETCH_PAGE_DATA_URL.replace(':slug', slug)).then((data) => {
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
