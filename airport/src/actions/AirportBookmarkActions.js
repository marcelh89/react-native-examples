import store from 'react-native-simple-store';
import {
  BOOKMARK_CREATE,
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

export const createBookmark = () => {
  const bookmark = {
      city: 'Husavik',
      country: 'Iceland',
      iata: 'HZK',
      icao: 'BIHU',
      id: 14,
      latitude: 65.952301,
      longitude: -17.426001,
      name: 'Húsavík Airport'
  };

  store.push('bookmarks', bookmark)
  .then(() => store.get('bookmarks'))
  .then((res) => console.log(res))
  .then(() => store.save('bookmarks', [bookmark]));
};
