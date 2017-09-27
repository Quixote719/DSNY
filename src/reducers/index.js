import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import carouselDataReducer from './reducer_carouselData';
import ResourcesReducer from './reducer_resources';

const rootReducer = combineReducers({carouselDataReducer: carouselDataReducer, resources: ResourcesReducer});

export default rootReducer;
