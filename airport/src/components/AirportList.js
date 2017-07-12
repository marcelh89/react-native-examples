import _ from 'lodash';
import React, { Component } from 'react';
import { View, ScrollView, ListView } from 'react-native';
import { connect } from 'react-redux';
import { Header } from './common';
import SearchForm from './SearchForm';
import AirportListItem from './AirportListItem';


class AirportList extends Component {

  componentWillMount() {
    console.log('componentWillMount');
    this.dataSource = ds.cloneWithRows(this.props.airports);
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillReceiveProps(newProps) {
    console.log('componentWillReceiveProps');
    const airports = newProps.airports;
    console.log(newProps);
    console.log(this.props);

    if (airports !== this.props.airports) {
      this.dataSource = ds.cloneWithRows(airports);
    }
}

  renderRow(airport) {
    return <AirportListItem airport={airport} />;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>

        <SearchForm />

        <Header headerText="Results" />

        <ScrollView>
            <ListView
              enableEmptySections
              dataSource={this.dataSource}
              renderRow={this.renderRow}
            />
        </ScrollView>

      </View>
    );
  }
}

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

const mapStateToProps = state => {
  console.log('AiportList - mapStateToProps');
  console.log(state);
  console.log(state.airportList);

  const airports = _.map(state.airportList, (airport) => {
    const bookmarked = _.some(state.bookmarkList, (bookmark) => {
      return bookmark.id === airport.id;
    });
    return { ...airport, bookmarked };
  });

  return { airports };
};

export default connect(mapStateToProps)(AirportList);
