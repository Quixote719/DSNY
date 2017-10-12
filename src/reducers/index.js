import {combineReducers} from 'redux';
//import {reducer as formReducer} from 'redux-form';
import carouselDataReducer from './reducer_home';
import ResourcesReducer from './reducer_resources';
import AboutDataReducer from './reducer_about';
import mediaReducer from './Reducer_media';
import cardReducer from './reducer_card_details';
import dropdownListReducer from './reduce_dropdown_list';

const rootReducer = combineReducers({
  carouselDataReducer: carouselDataReducer,
  card: cardReducer,
  dropdownList: dropdownListReducer,
  media: mediaReducer,
  resources: ResourcesReducer,
  AboutDataReducer: AboutDataReducer
});

export default rootReducer;
