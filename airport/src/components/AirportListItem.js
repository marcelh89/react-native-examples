import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection, Button } from './common';

class AirportListItem extends Component {

  selectAirport(id) {
    console.log(`selected airport with id ${id}`);
    const { airport } = this.props;
    Actions.airportDetail({ title: airport.iata, airport });
  }

  render() {
    const { airport } = this.props;
    const { textStyle, deleteButtonStyle } = styles;

    return (
      <CardSection>
        <TouchableWithoutFeedback onPress={() => this.selectAirport(airport.id)}>
          <View style={{ flexDirection: 'row', flex: 1 }}>
            <View style={{ flex: 0.85 }}>
                <Text style={textStyle}>{airport.name}</Text>
                <Text style={textStyle}>IATA: {airport.iata}</Text>
                <Text style={textStyle}>Country: {airport.country}</Text>
            </View>
            <View style={{ flex: 0.15 }}>
                <Button btnStyle={deleteButtonStyle}>X</Button>
            </View>
          </View>
          </TouchableWithoutFeedback>
      </CardSection>
    );
  }
}

const styles = {
  textStyle: {
    textAlign: 'center',
  },
  deleteButtonStyle: {
    paddingLeft: 15,
    paddingRight: 15
  }
};

export default AirportListItem;
