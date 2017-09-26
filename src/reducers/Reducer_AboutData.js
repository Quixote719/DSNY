import initStore from './store';

export default function AboutDataReducer(state = initStore, action) {
  switch (action.type) {
    case 'SET_ABOUT_TITLE':
          // return { ...state, vendorSignUp: { ...state.vendorSignUp, formData: { ...state.vendorSignUp.formData, locations: temp } } };
      return { ...state, AboutBigData: action.payload};
    default:
      return state;
  }
}
