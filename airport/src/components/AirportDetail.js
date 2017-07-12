import React, { Component } from 'react';
import { View, Text } from 'react-native';
//import { MapView } from 'react-native-maps';
import { connect } from 'react-redux';
import { Card, Button } from './common';
import { addBookmark } from '../actions';

class AirportDetail extends Component {

  componentWillMount() {
    console.log('componentWillMount');
    console.log(this.props);
  }

  renderMapView(longitude, latitude) {
    return (''
          /*<MapView
            initialRegion={{
              latitude,
              longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />*/
    );
  }

  onButtonPress() {
    console.log(this.props);
    const { airport } = this.props;
    this.props.addBookmark(airport);
  }

  renderButton() {
    const { airport } = this.props;

    if (!airport.bookmarked) {
      return (
          <Button
            onPress={this.onButtonPress.bind(this)}
            btnStyle={{ flex: 0.5 }}
          >Bookmark</Button>
      );
    }
  }

  render() {
    console.log(AirportDetail);
    console.log(this.props);
    console.log(this.state);

    const { airport } = this.props;
    const { nameTextStyle } = styles;

    return (
      <View style={{ flex: 1 }}>
        <Card style={{ flexDirection: 'row' }}>
          <Text style={nameTextStyle}>{airport.name}</Text>
          {this.renderButton()}

        </Card>
        <Card>
          <Text>IATA: {airport.iata}</Text>
          <Text>ICAO: {airport.icao}</Text>
        </Card>
        <Card>
          <Text>CITY: {airport.city}</Text>
          <Text>Country: {airport.country}</Text>
        </Card>

        {/*this.renderMapView(airport.longitude, airport.latitude)*/}

      </View>
    );
  }
}

const styles = {
  nameTextStyle: {
    fontWeight: 'bold',
    fontSize: 18,
    flex: 0.5
  }
};

export default connect(null, { addBookmark })(AirportDetail);
