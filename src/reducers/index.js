import {combineReducers} from 'redux';
//import {reducer as formReducer} from 'redux-form';
import carouselDataReducer from './reducer_home';
import ResourcesReducer from './reducer_resources';
import AboutDataReducer from './reducer_about';
import ServicesDataReducer from './reducer_services';
import mediaReducer from './Reducer_media';
import cardReducer from './reducer_card_details';
import dropdownListReducer from './reduce_dropdown_list';
import contactFormReducer from './reducer_contact_forms';
import errorReducer from './reducer_error'

const rootReducer = combineReducers({
  carouselDataReducer: carouselDataReducer,
  card: cardReducer,
  dropdownList: dropdownListReducer,
  media: mediaReducer,
  resources: ResourcesReducer,
  AboutDataReducer: AboutDataReducer,
  ServicesDataReducer: ServicesDataReducer,
  forms:contactFormReducer,
  error:errorReducer
});

export default rootReducer;
