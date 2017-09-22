import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import carouselDataReducer from './reducer_carouselData';

const rootReducer = combineReducers({
  carouselDataReducer: carouselDataReducer,
});

export default rootReducer;
