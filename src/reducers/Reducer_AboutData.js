import initStore from './store';

export default function AboutDataReducer(state = initStore, action) {
  switch (action.type) {
    case 'SET_ABOUT_SECTIONS':
      return { ...state, About: {...state.About, AboutSectionsData: action.payload}};
    case 'SET_ABOUT_TITLE':
      return { ...state, About: {...state.About, AboutBigData: action.payload}};
    case 'SET_ABOUT_LEADERSHIP':
      return { ...state, About: {...state.About, LeadershipBigData: action.payload}};
    case 'SET_ABOUT_LEADERSHIP_IMAGE':
      return { ...state, About: {...state.About, LeadershipImage: action.payload}};
    case 'SET_ABOUT_BUREAUS':
      return { ...state, About: {...state.About, BureausBigData: action.payload}};
    case 'SET_ABOUT_BUREAUS_DP':
      return { ...state, About: {...state.About, BureausDpBigData: action.payload}};
    case 'SET_ABOUT_STRATEGICPLAN':
      return { ...state, About: {...state.About, StrategicPlanBigData: action.payload}};
    case 'SET_ABOUT_FOUNDATION':
      return { ...state, About: {...state.About, FoundationBigData: action.payload}};
    case 'SET_ABOUT_LOCATIONS':
      return { ...state, About: {...state.About, LocationsBigData: action.payload}};
    case 'SET_ABOUT_OPERATIONS':
      return { ...state, About: {...state.About, OperationsBigData: action.payload}};
    default:
      return state;
  }
}
