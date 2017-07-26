import {
  BOOKMARK_CREATE,
  BOOKMARK_DELETE,
  BOOKMARKS_FETCH_SUCCESS,
  BOOKMARKS_FETCH_FAILED,
  BOOKMARK_DROP_SUCCESS,
  BOOKMARK_DROP_FAILED
} from '../actions/types';

export default (state = [], action) => {
  console.log('BookmarkReducer');
  console.log(state);
  console.log(action);

  switch (action.type) {

    case BOOKMARKS_FETCH_SUCCESS:
      return action.data;
    case BOOKMARKS_FETCH_FAILED:
      return state;
    case BOOKMARK_DROP_SUCCESS:
      return state;
    default:
      return state;
  }
};
