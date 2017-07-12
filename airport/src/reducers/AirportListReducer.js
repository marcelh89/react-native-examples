import { AIRPORTS_FETCH_SUCCESS, AIRPORTS_FETCH_FAILED } from '../actions/types';

export default (state = [], action) => {

  console.log('AirportListReducer');
  console.log('state is');
  console.log(state);
  console.log('action is');
  console.log(action);
  console.log('action type is');

  switch (action.type) {

    case AIRPORTS_FETCH_SUCCESS:
      console.log('AirportListReducer - AIRPORTS_FETCH_SUCCESS');
      console.log(action.data);
      return action.data;
    case AIRPORTS_FETCH_FAILED:
      console.log(action.payload);
      return state
    default:
      return state;
  }
};
