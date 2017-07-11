import React, { Component } from 'react';
import { View, Text } from 'react-native';
//import { MapView } from 'react-native-maps';
import { connect } from 'react-redux';
import { Card, Button } from './common';

class AirportDetail extends Component {

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
          <Button btnStyle={{ flex: 0.5 }}>Bookmark</Button>
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
    fontWidth: 'bold',
    fontSize: 20,
    flex: 0.5
  }
};

export default connect(null)(AirportDetail);
