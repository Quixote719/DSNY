import _ from "lodash";
import * as types from '../constants/ActionTypes';
import initStore from './store';

export default function(state = initStore, action) {
  switch (action.type) {
    case types.FETCH_PRESS_RELEASE_SUB_LIST:
      return {
        ...state,
        PresssReleasesSubList: _.mapKeys(action.payload.data, "id")
      };
    case types.FETCH_REPORT_CARD_SUB_LIST:
      return {
        ...state,
        ReportCardSubList: _.mapKeys(action.payload.data, "id")
      };
    case types.FETCH_STATS_CARD_SUB_LIST:
      return {
        ...state,
        StatsCardSubList: _.mapKeys(action.payload.data, "id")
      };
    case types.FETCH_LAWS_SUB_LIST:
      return {
        ...state,
        LawsSubList: _.mapKeys(action.payload.data, "id")
      };
    case types.FETCH_EDUCATIONAL_MATERIALS_PROMOTIONAL_SUB_LIST:
      return {
        ...state,
        EmPromotionalSubList: _.mapKeys(action.payload.data, "id")
      };
    case types.FETCH_SUB_SECTION_HEADER:
      return {
        ...state,
        subSectionHeader: action.payload
      };
    default:
      return state;
  }
}
