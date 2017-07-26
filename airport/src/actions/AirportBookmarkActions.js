import _ from 'lodash';
import store from 'react-native-simple-store';
import {
  BOOKMARK_CREATE_SUCCESS,
  BOOKMARK_CREATE_FAILED,
  BOOKMARK_DROP_SUCCESS,
  BOOKMARK_DROP_FAILED,
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
        console.log('addBookmark success');
        console.log(res);
        dispatch({ type: BOOKMARK_CREATE_SUCCESS, data: res });
    }).catch((res) => {
        console.log('addBookmark failed');
        console.log(res);
        dispatch({ type: BOOKMARK_CREATE_FAILED, data: res });
    });
  };
};

export const dropBookmark = (bookmark) => {

  return (dispatch) => {
    store.get('bookmarks')
      .then(res => {
          console.log('fetchBookmarks success');
          const airports = _.filter(res, (airport) => {
            if (airport.id != bookmark.id) return { ...airport };
          });

          console.log(airports);

          store.save('bookmarks', airports)
          .then(() => {
            console.log('dropBookmark success');
            dispatch({ type: BOOKMARK_DROP_SUCCESS, data: airports });
          }).catch((res) => {
            dispatch({ type: BOOKMARKS_DROP_FAILED, data: res });
          });

          //dispatch({ type: BOOKMARKS_FETCH_SUCCESS, data: res });
      }).catch((res) => {
          console.log('fetchBookmarks failed');
          console.log(res);
          dispatch({ type: BOOKMARKS_FETCH_FAILED, data: res });
      })
  };


}
