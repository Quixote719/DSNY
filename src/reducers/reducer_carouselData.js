import initStore from './store';

export default function carouselDataReducer(state = initStore, action) {
  switch (action.type) {
    case 'SET_CAROUSEL_TITLE':
      return { ...state, carouselItems: action.payload };
    case 'SET_PANEL_ITEMS':
      return { ...state, carouselPanelItems: action.payload };
    case 'SET_PANEL_ITEMS_TEMPORARY':
      return { ...state, carouselPanelItemsTemporary: action.payload };
    default:
      return state;
  }
}