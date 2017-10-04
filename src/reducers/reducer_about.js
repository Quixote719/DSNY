import initStore from './store';

export default function AboutDataReducer(state = initStore, action) {
  switch (action.type) {
    case 'SET_ABOUT':
      return { ...state, About: {...state.About, AboutData: action.payload}};
    case 'SET_ABOUT_SECTIONS':
      return { ...state, About: {...state.About, AboutSectionsData: action.payload}};
    case 'SET_ABOUT_BUREAUS':
      return { ...state, About: {...state.About, BureausBigData: action.payload}};
    case 'SET_ABOUT_BUREAUS_DP':
      return { ...state, About: {...state.About, BureausDpBigData: action.payload}};
    default:
      return state;
  }
}
