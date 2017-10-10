import initStore from './store';

export default function AboutDataReducer(state = {}, action) {
  switch (action.type) {
    case 'SET_ABOUT':
      return { ...state, AboutData: action.payload};
    default:
      return state;
  }
}
