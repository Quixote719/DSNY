import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import carouselDataReducer from './reducer_carouselData';
import ResourcesReducer from './reducer_resources';
import AboutDataReducer from './Reducer_AboutData';

const rootReducer = combineReducers({carouselDataReducer: carouselDataReducer,
                                      resources: ResourcesReducer,
                                      AboutDataReducer: AboutDataReducer
                                    });

export default rootReducer;
