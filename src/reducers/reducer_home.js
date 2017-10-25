import initStore from './store';
import _ from "lodash";
import * as types from '../constants/ActionTypes';

export default function carouselDataReducer(state = {}, action) {
  switch (action.type) {
    case 'SET_CAROUSEL_TITLE':
      return { ...state, carouselItems: action.payload };
    case 'SET_PANEL_ITEMS':
      return { ...state, carouselPanelItems: action.payload };
    case 'SET_PANEL_ITEMS_TEMPORARY':
      return { ...state, carouselPanelItemsTemporary: action.payload };
    case 'SET_PROGRAM_CARDS':
      return { ...state, programListData: action.payload };
    case 'SET_PROGRAM_INITIATIVES':
      return { ...state, programInitiativesData: action.payload };
    case 'SET_RID_OFF_KEYWORDS':
      return { ...state, ridOffKeywords: action.payload };
    case 'SET_RID_OFF_SEARCH_RESULTS':
      return { ...state, getRidOfSearchResultsData: action.payload, noOfSearchResults: action.length };
    // case 'SET_RID_OFF_SEARCH_BOX':
    //   return { ...state, getRidOfSearchValue: action.payload };
    case types.FETCH_EVENT_SUB_LIST:
      return {...state, EventsSubList: _.mapKeys(action.payload.data, "$id")};
    case types.FETCH_EVENT_DETAILS:
      return {...state, EventDetails: action.payload.data};
    default:
      return state;
  }
}
