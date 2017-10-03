import initStore from './store';
import _ from "lodash";
import * as types from '../constants/ActionTypes';

export default function carouselDataReducer(state = initStore, action) {
  switch (action.type) {
    case 'SET_CAROUSEL_TITLE':
      return { ...state, carouselItems: action.payload };
    case 'SET_PANEL_ITEMS':
      return { ...state, carouselPanelItems: action.payload };
    case 'SET_PANEL_ITEMS_TEMPORARY':
      return { ...state, carouselPanelItemsTemporary: action.payload };
    case types.FETCH_EVENT_SUB_LIST:
      return {
        ...state,
        EventsSubList: _.mapKeys(action.payload.data, "$id")
      };
    default:
      return state;
  }
}