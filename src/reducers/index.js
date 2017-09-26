import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import carouselDataReducer from './reducer_carouselData';
import AboutDataReducer from './Reducer_AboutData';

const rootReducer = combineReducers({
  carouselDataReducer: carouselDataReducer,
  AboutDataReducer: AboutDataReducer
});

export default rootReducer;
