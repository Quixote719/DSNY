import initStore from './store';

export default function AboutDataReducer(state = {}, action) {
  switch (action.type) {
    case 'SET_ABOUT':
      return { ...state, AboutData: action.payload};
    case 'SET_STRATEGICPLAN':
      return { ...state, StrategicPlanData: action.payload};
    default:
      return state;
  }
}
