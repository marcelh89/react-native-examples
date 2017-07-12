import React, { Component } from 'react';
import { View, ScrollView, ListView } from 'react-native';
import { connect } from 'react-redux';
import { Header } from './common';
import SearchForm from './SearchForm';
import AirportListItem from './AirportListItem';


class AirportList extends Component {

  componentWillMount() {
    console.log('componentWillMount');
    this.initDataSource();
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

  initDataSource() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    console.log(this.props.airports);
    this.dataSource = ds.cloneWithRows(this.props.airports);
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
  return { airports: state.airportList };
};

export default connect(mapStateToProps)(AirportList);
