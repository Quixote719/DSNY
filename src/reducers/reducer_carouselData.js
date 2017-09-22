import initStore from './store';

export default function carouselDataReducer(state = initStore, action) {
  switch (action.type) {
    case 'SET_CAROUSEL_TITLE':
          // return { ...state, vendorSignUp: { ...state.vendorSignUp, formData: { ...state.vendorSignUp.formData, locations: temp } } };
      return { ...state, carouselItems: action.payload};
    default:
      return state;
  }
}