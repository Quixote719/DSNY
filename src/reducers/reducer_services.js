import _ from "lodash";
import * as types from '../constants/ActionTypes';

export default function ServicesDataReducer(state = { bureaus: {} }, action) {
  switch (action.type) {
    case 'SET_SERVICES':
      return { ...state, ServicesData: action.payload};
    case 'SET_ELECTRONICS_LOCATIONS':
      return { ...state, ELocationList: action.payload.data};
    case 'SET_FOODSCRAP_LOCATIONS':
      return { ...state, FoodScrapList: action.payload.data};
    case 'SET_HARMFUL_PRODUCT_LOCATIONS':
      return { ...state, HarmfulProductList: action.payload.data};
    case 'SET_ELECTRONICS_CONTENT':
      return { ...state, ElectronicsData: action.payload.data};
    case 'SET_FOODSCRAP_CONTENT':
      return { ...state, FoodScrapData: action.payload.data};
    case 'SET_HARMFUL_PRODUCT_CONTENT':
      return { ...state, HarmfulProductData: action.payload.data};
    default:
      return state;
  }
}
