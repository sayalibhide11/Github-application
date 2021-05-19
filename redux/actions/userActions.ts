import axios from 'axios'

export interface SearchAction {
  readonly type: "ON_SEARCH";
  payload: null;
}

export type UserAction = SearchAction;

export const loadSearched = () => {
  return (dispatch, getState) => {
     console.log(getState().userReducer.searchedFor);
    dispatch({ type: "ON_SEARCH_START"})
    axios.get(`https://api.github.com/search/users?q=${getState().userReducer.searchedFor}`).then
    (function (response) {
      console.log(response.data.items)
      dispatch({ type: "ON_SEARCH_SUCCESS", payload: response.data.items})
    }).catch(function(error) {
      dispatch({type: 'ON_SEARCH_FAILURE', payload: error})
    })
  }
}


export const loadDefaultList = () => {
  return (dispatch, getState) => {
     
    dispatch({ type: "ON_SEARCH_START"})
    axios.get("https://api.github.com/users").then
    (function (response) {
      console.log(response.data)
      dispatch({ type: "ON_SEARCH_SUCCESS", payload: response.data})
    }).catch(function(error) {
      dispatch({type: 'ON_SEARCH_FAILURE', payload: error})
    })
  }
}

