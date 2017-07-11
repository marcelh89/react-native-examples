import React, { Component } from 'react';
import { View, ScrollView, ListView } from 'react-native';
import { connect } from 'react-redux';
import { Header } from './common';
import AirportListItem from './AirportListItem';

class AirportList extends Component {

  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.airports);
  }

  renderRow(airport) {
    return <AirportListItem airport={airport} />;
  }

  render() {
    return (
      <ScrollView>
        <Header headerText="Results" />
          <ListView
            dataSource={this.dataSource}
            renderRow={this.renderRow}
          />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  //object {airports: [] } -> Array[]
  return state.airports;
};

export default connect(mapStateToProps)(AirportList);
