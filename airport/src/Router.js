import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import AirportBookmark from './components/AirportBookmark';
import AirportList from './components/AirportList';
import AirportDetail from './components/AirportDetail';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
        <Scene
          key="airportBookmark"
          component={AirportBookmark}
          title="AirportBookmarks"

        />
        <Scene key="airportList" component={AirportList} title="AirportList" initial />

        <Scene key="airportDetail" component={AirportDetail} title="AirportDetails" />
    </Router>
  );
};

export default RouterComponent;
