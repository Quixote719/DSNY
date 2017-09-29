import initStore from './store';

export default function AboutDataReducer(state = initStore, action) {
  switch (action.type) {
    case 'SET_ABOUT_TITLE':
      return {
        ...state,
        About: {
          ...state.About,
          AboutBigData: action.payload
        }
      };
    case 'SET_ABOUT_LEADERSHIP':
      return {
        ...state,
        About: {
          ...state.About,
          LeadershipBigData: action.payload
        }
      };
    default:
      return state;
  }
}
