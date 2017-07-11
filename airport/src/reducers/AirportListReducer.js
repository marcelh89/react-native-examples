import { IATA_SEARCH, NAME_SEARCH } from '../actions';

import data from './Airports.json';


const INITIAL_STATE = {

  //airports: []
  airports: data

};


export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

    case IATA_SEARCH:
      return INITIAL_STATE;
    case NAME_SEARCH:
      return INITIAL_STATE;
    default:
      return state;
  }
};
