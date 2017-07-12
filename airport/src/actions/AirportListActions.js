import axios from 'axios';
import {
  SEARCH_CHANGED,
  AIRPORTS_FETCH_SUCCESS,
  AIRPORTS_FETCH_FAILED
} from './types';

export const searchChanged = (text) => {
  console.log(`searchChanged with text: ${text}`);
  return {
    type: SEARCH_CHANGED,
    payload: text
  };
};

export const search = (text) => {
  const { searchValue } = text;

  console.log(`search with text: ${searchValue}`);
  //split text to see if search for iata code or name?

  const searchIATAUrl = `https://sandbox.paxlife.aero/api/iata/${searchValue}`;
  const searchNameUrl = `https://sandbox.paxlife.aero/api/search/${searchValue}`;

  return (dispatch) => {
    //do the search via API
    axios.get(searchIATAUrl, {})
      .then(responseIATA => {
        console.log(`GET request to url ${searchIATAUrl} successful with response ${responseIATA}`);
        console.log(responseIATA);
        dispatch({ type: AIRPORTS_FETCH_SUCCESS, data: responseIATA.data });
      })
      .catch(errorIATA => {
        console.log(`error GET requesting url ${searchIATAUrl} failed due to ${errorIATA}`);

        axios.get(searchNameUrl, {})
          .then(responseName => {
            console.log(`GET request to url ${searchIATAUrl}
              successful with response ${responseName}`);
            console.log(responseName);
            dispatch({ type: AIRPORTS_FETCH_SUCCESS, data: responseName.data });
          }).catch(errorName => {
              console.log(`error GET requesting url ${searchNameUrl} failed due to ${errorName}`);
              dispatch({ type: AIRPORTS_FETCH_FAILED, data: errorName });
          });
      });
  };
};
