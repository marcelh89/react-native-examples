import _ from 'lodash';
import React, { Component } from 'react';
import { View, ScrollView, ListView } from 'react-native';
import { connect } from 'react-redux';
import { Header } from './common';
import SearchForm from './SearchForm';
import AirportListItem from './AirportListItem';
import { fetchBookmarks, dropBookmark, addBookmark } from '../actions';

class AirportBookmark extends Component {

  componentWillUpdate() {
    console.log('componentWillMount');
    this.props.fetchBookmarks();
    this.dataSource = ds.cloneWithRows(this.props.bookmarks);
  }

  componentWillReceiveProps(newProps) {
    console.log('componentWillReceiveProps');
    const bookmarks = newProps.bookmarks;
    console.log(newProps);
    console.log(this.props);

    if (bookmarks !== this.props.bookmarks) {
      this.dataSource = ds.cloneWithRows(bookmarks);
    }
  }

  renderRow(airport) {
    console.log('renderRow');
    console.log(airport)
    return <AirportListItem deletable airport={_.merge(airport, { bookmarked: true })} />;
  }

  render() {

    console.log('render');

    return (
      <View style={{ flex: 1 }}>

        <SearchForm forwardKey='airportList' />

        <Header headerText="Bookmarks" />

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
  console.log('AirportBookmarkList - mapStateToProps');
  console.log(state);
  console.log(state.bookmarkList);
  return { bookmarks: state.bookmarkList };
};

export default connect(mapStateToProps, { fetchBookmarks, dropBookmark, addBookmark })(AirportBookmark);
