import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './common';

class AirportBookmark extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
      <Header headerText="AirportBookmark" />
      </View>
    );
  }
}

export default AirportBookmark;
