import initStore from './store';

export default function AboutDataReducer(state = initStore, action) {
  switch (action.type) {
    case 'SET_ABOUT_SECTIONS':
      return { ...state, About: {...state.About, AboutSectionsData: action.payload}};
    default:
      return state;
  }
}
