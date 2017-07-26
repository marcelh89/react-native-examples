import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { CardSection, Button } from './common';
import { dropBookmark } from '../actions';

class AirportListItem extends Component {

  onDelete() {
    console.log('delete');
    const { airport } = this.props;
    this.props.dropBookmark(airport);
  }

  selectAirport(id) {
    console.log(`selected airport with id ${id}`);
    const { airport } = this.props;
    Actions.airportDetail({ title: airport.iata, airport });
  }

  renderButton() {
    const { deleteButtonStyle } = styles;
    const { deletable } = this.props;
    console.log();

    if (deletable) {
      return (
        <View style={{ flex: 0.15 }}>
            <Button onPress={this.onDelete.bind(this)} btnStyle={deleteButtonStyle}>X</Button>
        </View>
      );
    }
  }

  render() {
    const { airport } = this.props;
    const { textStyle } = styles;

    return (
      <CardSection>
        <TouchableWithoutFeedback onPress={() => this.selectAirport(airport.id)}>
          <View style={{ flexDirection: 'row', flex: 1 }}>
            <View style={{ flex: 0.85 }}>
                <Text style={textStyle}>{airport.name}</Text>
                <Text style={textStyle}>IATA: {airport.iata}</Text>
                <Text style={textStyle}>Country: {airport.country}</Text>
            </View>
            { this.renderButton() }
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

export default connect(null, { dropBookmark })(AirportListItem);
