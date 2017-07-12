import store from 'react-native-simple-store';
import {
  BOOKMARK_CREATE_SUCCESS,
  BOOKMARK_CREATE_FAILED,
  BOOKMARK_DELETE,
  BOOKMARKS_FETCH_SUCCESS,
  BOOKMARKS_FETCH_FAILED
} from './types';

export const fetchBookmarks = () => {

  return (dispatch) => {
    store.get('bookmarks')
      .then(res => {
          console.log('fetchBookmarks success');
          console.log(res);
          dispatch({ type: BOOKMARKS_FETCH_SUCCESS, data: res });
      }).catch((res) => {
          console.log('fetchBookmarks failed');
          console.log(res);
          dispatch({ type: BOOKMARKS_FETCH_FAILED, data: res });
      });
  };
};

export const addBookmark = (bookmark) => {

  console.log('addBookmark');

  return (dispatch) => {
    store.push('bookmarks', bookmark)
    .then(res => {
        console.log('fetchBookmarks success');
        console.log(res);
        dispatch({ type: BOOKMARK_CREATE_SUCCESS, data: res });
    }).catch((res) => {
        console.log('fetchBookmarks failed');
        console.log(res);
        dispatch({ type: BOOKMARK_CREATE_FAILED, data: res });
    });
  };
};
