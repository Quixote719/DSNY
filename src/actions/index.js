import axios from 'axios';
import * as types from '../constants/ActionTypes';
import {
  MEDIAS_ALL_URL,
  MEDIA_URL,
  PRESS_RELEASE_SUB_LIST_URL,
  FETCH_REPORT_CARD_SUB_LIST_URL,
  FETCH_STATS_CARD_SUB_LIST_URL,
  FETCH_LAWS_SUB_LIST_URL,
  SUB_SECTION_HEADER_URL,
  FETCH_EDUCATIONAL_MATERIALS_PROMOTIONAL_SUB_LIST_URL,
  FETCH_PRESS_RELEASE_DETAILS_URL
} from '../constants/ApiConstants';

export function fetchmedias() {
  const request = axios.get(MEDIAS_ALL_URL);

  return {type: types.FETCH_MEDIAS, payload: request};
}

export function fetchPrSubList() {
  const request = axios.get(PRESS_RELEASE_SUB_LIST_URL);

  return {type: types.FETCH_PRESS_RELEASE_SUB_LIST, payload: request};
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

export function fetchPressReleaseDetails(slug) {
  return function(dispatch) {
    axios.get(FETCH_PRESS_RELEASE_DETAILS_URL.replace('id', slug)).then((data) => {
      dispatch({type: types.FETCH_PRESS_RELEASE_DETAILS, payload: data})
    })
  }
}

export function fetchRcSubList() {
  const request = axios.get(FETCH_REPORT_CARD_SUB_LIST_URL);

  return {type: types.FETCH_REPORT_CARD_SUB_LIST, payload: request};
}

export function fetchScSubList() {
  const request = axios.get(FETCH_STATS_CARD_SUB_LIST_URL);

  return {type: types.FETCH_STATS_CARD_SUB_LIST, payload: request};
}

export function fetchLawsSubList() {
  const request = axios.get(FETCH_LAWS_SUB_LIST_URL);

  return {type: types.FETCH_LAWS_SUB_LIST, payload: request};
}

export function fetchEmPSubList() {
  const request = axios.get(FETCH_EDUCATIONAL_MATERIALS_PROMOTIONAL_SUB_LIST_URL);

  return {type: types.FETCH_EDUCATIONAL_MATERIALS_PROMOTIONAL_SUB_LIST, payload: request};
}
