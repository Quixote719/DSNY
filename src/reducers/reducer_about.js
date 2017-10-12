export default function AboutDataReducer(state = {}, action) {
  switch (action.type) {
    case 'SET_ABOUT':
      return { ...state, AboutData: action.payload};
    case 'SET_LEADERSHIP':
      return { ...state, LeadershipData: action.payload};
    case 'SET_BUREAUS':
      return { ...state, BureausData: action.payload};
    case 'SET_STRATEGICPLAN':
      return { ...state, StrategicPlanData: action.payload};
    default:
      return state;
  }
}
