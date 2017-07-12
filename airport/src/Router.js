import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import AirportBookmarkList from './components/AirportBookmarkList';
import AirportList from './components/AirportList';
import AirportDetail from './components/AirportDetail';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
        <Scene
          key="airportBookmark"
          component={AirportBookmarkList}
          title="AirportBookmarks"
          initial
        />
        <Scene key="airportList" component={AirportList} title="AirportList"  />

        <Scene key="airportDetail" component={AirportDetail} title="AirportDetails" />
    </Router>
  );
};

export default RouterComponent;
