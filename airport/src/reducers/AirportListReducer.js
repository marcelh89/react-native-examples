import { AIRPORTS_FETCH_SUCCESS, AIRPORTS_FETCH_FAILED } from '../actions/types';

export default (state = [], action) => {

  switch (action.type) {

    case AIRPORTS_FETCH_SUCCESS:
      return action.data;
    case AIRPORTS_FETCH_FAILED:
      return state;
    default:
      return state;
  }
};
