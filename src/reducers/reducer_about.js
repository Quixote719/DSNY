import _ from "lodash";
import * as types from '../constants/ActionTypes';

export default function AboutDataReducer(state = { bureaus: {} }, action) {
  switch (action.type) {
    case 'SET_ABOUT':
      return { ...state, AboutData: action.payload};
    case 'SET_LEADERSHIP':
      return { ...state, LeadershipData: action.payload};
    case 'SET_BUREAUS':
      return { ...state, BureausData: action.payload};
    case 'SET_STRATEGICPLAN':
      return { ...state, StrategicPlanData: action.payload};
    case 'SET_COMMISSIONER':
      return { ...state, CommissionerData: action.payload};
    case types.FETCH_LOCATION_LIST:
      return {...state, LocationList: action.payload.data};
    case types.FETCH_BUREAUS_DETAILS:
      return {
        ...state,
        bureaus: {
          ...state.bureaus,
        details: _.mapKeys(action.payload.data, "id")
        }
      };
    case 'SET_FLEET':
      return {...state, FleetData: action.payload};
    case 'SET_CONTACT_PAGE':
      return {...state, ContactPageData: action.payload};
    case 'SET_COMPLAINTS_PAGE':
      return {...state, ComplaintsPageData: action.payload};
    default:
      return state;
  }
}
