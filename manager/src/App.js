import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBU4tWkQsDdcBVhYStaa8NINh7ySOdFIlU',
      authDomain: 'manager-338a2.firebaseapp.com',
      databaseURL: 'https://manager-338a2.firebaseio.com',
      storageBucket: 'manager-338a2.appspot.com',
      messagingSenderId: '111819937592'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
