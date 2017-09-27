import axios from 'axios';
import * as types from '../constants/ActionTypes';
import {
  MEDIAS_ALL_URL,
  MEDIA_URL,
  PRESS_RELEASE_SUB_LIST_URL,
  FETCH_REPORT_CARD_SUB_LIST_URL,
  FETCH_STATS_CARD_SUB_LIST_URL,
  FETCH_LAWS_SUB_LIST_URL,
  FETCH_EDUCATIONAL_MATERIALS_FOR_SCHOOL_SUB_LIST_URL,
  FETCH_EDUCATIONAL_MATERIALS_PROMOTIONAL_SUB_LIST_URL
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
  const request = axios.get(MEDIA_URL.replace(':id', id));

  return {type: types.FETCH_MEDIA, payload: request};
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

export function fetchEmFsSubList() {
  const request = axios.get(FETCH_EDUCATIONAL_MATERIALS_FOR_SCHOOL_SUB_LIST_URL);

  return {type: types.FETCH_EDUCATIONAL_MATERIALS_FOR_SCHOOL_SUB_LIST, payload: request};
}
