import { combineReducers } from 'redux';

import AirportListReducer from './AirportListReducer';

export default combineReducers({
  airports: AirportListReducer
});
