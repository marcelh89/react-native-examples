import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

  state = { albums: [], airports: [] };

  componentWillMount() {
    console.log('componentWillMount in AlbumList');
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));

    //axios.get('https://sandbox.paxlife.aero/api/search/Berlin')
    //  .then(response => this.setState({ airports: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.state);

    return (
      <View>
        <Text style={styles.headingTextStyle}>{this.props.headerTitle}</Text>
        <ScrollView>
        {this.renderAlbums()}
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  headingTextStyle: {
    marginLeft: 10,
    marginTop: 10,
    fontWeight: 'bold',
    color: '#000'
  }
};

export default AlbumList;
