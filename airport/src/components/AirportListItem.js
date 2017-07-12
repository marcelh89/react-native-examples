import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class AirportListItem extends Component {

  selectAirport(id) {
    console.log(`selected airport with id ${id}`);
    const { airport } = this.props;
    Actions.airportDetail({ title: airport.iata, airport });
  }

  render() {
    const { airport } = this.props;
    const { textStyle } = styles;

    return (
      <CardSection>
        <TouchableWithoutFeedback onPress={() => this.selectAirport(airport.id)}>
          <View>
              <Text style={textStyle}>{airport.name}</Text>
              <Text>IATA: {airport.iata}</Text>
              <Text>Country: {airport.country}</Text>
          </View>
          </TouchableWithoutFeedback>
      </CardSection>
    );
  }
}


const styles = {
  textStyle: {
    textAlign: 'center',
  }
};

export default AirportListItem;
