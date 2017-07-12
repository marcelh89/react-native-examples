import { combineReducers } from 'redux';

import AirportListReducer from './AirportListReducer';
import SearchFormReducer from './SearchFormReducer';

export default combineReducers({
  airportList: AirportListReducer,
  searchForm: SearchFormReducer
});
