import { combineReducers } from 'redux';

import AirportListReducer from './AirportListReducer';
import SearchFormReducer from './SearchFormReducer';
import BookmarkReducer from './BookmarkReducer';

export default combineReducers({
  airportList: AirportListReducer,
  searchForm: SearchFormReducer,
  bookmarkList: BookmarkReducer
});
