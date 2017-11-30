import initStore from './store';
import _ from "lodash";
import * as types from '../constants/ActionTypes';

export default function carouselDataReducer(state = {newsData: {}}, action) {
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
      case 'SET_SITE_SEARCH_VALUE':
      return { ...state, siteSearchValue: action.payload};
      case 'SET_CLEAR_BOX_SEARCH_VALUE':
      return { ...state, siteClearBoxValue: action.payload};
      case 'SET_SITE_SEARCH_KEYWORDS':
      return { ...state, siteSearchKeywords: action.payload };
    case 'SET_SITE_SEARCH_RESULTS':
      return { ...state, siteSearchResultsData: action.payload, noOfSearchResults: action.length };
    case 'SET_ACTIVE_NAV_TAB':
    return { ...state, activeNavTab: action.payload };    

    case 'SET_RID_OFF_ITEM_DETAILS':
      return { ...state, getRidOfItemDetailsData: action.payload};
      
      case 'SET_ADDRESS_VALIDATOR_FLAG':
      return { ...state, addressValidator: action.payload};

      case 'SET_PAGINATION_VALUE':
      return { ...state, paginationKeyValue: action.payload};
      case 'SET_COMMERICIAL_FLAG':
      return { ...state, commercialAddress: action.commercialAddress};
    case 'SET_NEWS_PAGE':
    return {
      ...state,
      newsData: {
        ...state.newsData,
        list: [action.payload.data]
      }
    };
    case 'SET_NEWS_DATA':
    return {
      ...state,
      newsData: {
        ...state.newsData,
        details: [action.payload.data]
      }
    };
    case 'SET_COLLECTION_SCHEDULE_DATA':
      return { ...state, organicsCollectionScheduleForm: action.organicsCollectionScheduleForm, regularCollectionScheduleForm: action.regularCollectionScheduleForm,recyclingCollectionScheduleForm: action.recyclingCollectionScheduleForm, DSNYGeoCoder: action.DSNYGeoCoder, noResultsError: action.noResultsError, suggestionAddress: action.suggestionAddress, collectionScheduleInfo: action.collectionScheduleInfo,routingData: action.routingData, collectionScheduleData: action.payload, arrayLength: action.arrayLength, holidayData: action.holidayData};
    case types.FETCH_EVENT_SUB_LIST:
      return {...state, EventsSubList: _.mapKeys(action.payload.data, "$id")};
    case types.FETCH_EVENT_DETAILS:
      return {...state, EventDetails: action.payload.data};
    default:
      return state;
  }
}
