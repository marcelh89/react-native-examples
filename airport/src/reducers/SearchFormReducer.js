import {
  SEARCH_CHANGED,
  AIRPORTS_FETCH_FAILED,
  AIRPORTS_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  searchValue: '',
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  console.log(`SearchFormReducer with type ${action.type}`);
  switch (action.type) {
    case SEARCH_CHANGED:
      console.log(`and value ${action.payload}`);
        return { ...state, searchValue: action.payload };
    case AIRPORTS_FETCH_FAILED:
        console.log(`and value ${action.data}`);
        return { ...state, error: `${action.data}` };
    case AIRPORTS_FETCH_SUCCESS:
            console.log(`and value ${action.data}`);
        return { ...state, error: '' };
    default:
      return state;
  }
};
