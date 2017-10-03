import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import carouselDataReducer from './reducer_carouselData';
import ResourcesReducer from './reducer_resources';
import AboutDataReducer from './reducer_about';
import PressReleaseReducer from './Reducer_PressRelease';
import mediaReducer from './Reducer_media';

const rootReducer = combineReducers({carouselDataReducer: carouselDataReducer, media: mediaReducer, resources: ResourcesReducer, AboutDataReducer: AboutDataReducer, PressRelease: PressReleaseReducer});

export default rootReducer;
