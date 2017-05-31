/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

export default class codechallenge extends Component {

  render() {
    return (
      <View style={styles.topViewStyle}>
        <Header />
        <AlbumList headerTitle={'Results'} />
      </View>
    );
  }
}

const styles = {
  topViewStyle: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    justifyContent: 'space-between'
  }
};

AppRegistry.registerComponent('codechallenge', () => codechallenge);
