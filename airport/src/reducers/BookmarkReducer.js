import {
  BOOKMARK_CREATE,
  BOOKMARK_DELETE,
  BOOKMARKS_FETCH_SUCCESS,
  BOOKMARKS_FETCH_FAILED
} from '../actions/types';

export default (state = [], action) => {

  switch (action.type) {

    case BOOKMARKS_FETCH_SUCCESS:
      return action.data;
    case BOOKMARKS_FETCH_FAILED:
      return state;
    default:
      return state;
  }
};
