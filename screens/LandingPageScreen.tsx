import React, { Component, useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import CustomHeader from "../components/customHeader";
import UserBox from "../components/Userbox";
import axios from "axios";

import { connect } from "react-redux";

import * as actionTypes from "../redux/actions/constants";

import * as quoteActions from "../redux/actions/userActions";

const LandingPageScreen = (props) => {  
  useEffect(() => {
    props.loadDefaultList();
  }, [])

  useEffect(() => {
    console.log(props.searchedFor, "I am in landing page");
    props.loadSearched();
   }, [props.searchedFor])

// componentDidMount() {
//   console.log("I am in componentDidMount");
//     this.props.loadDefaultList();
    // }

// shouldComponentUpdate(nextProps, nextState) {
//   if (nextProps.searchedFor !== this.props.searchedFor) {
//      console.log(this.props.searchedFor, "I am in landing page");
//     this.props.loadSearched();
//     return true
// } else {
//   return false
//  }
// }

    return (
      <View>
        <CustomHeader value={props.searchedFor} />
        <UserBox 
            value={props.searchedFor}
            usersArray={props.usersArray}
          />
      </View>
    );
  }

const mapStateToProps = (state) => {
  return {
    searchedFor: state.userReducer.searchedFor,
    isSearching: state.userReducer.isSearching,
    usersArray: state.userReducer.usersArray,
    error: state.userReducer.error,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    loadSearched: () => dispatch(quoteActions.loadSearched()),
    loadDefaultList: () => dispatch(quoteActions.loadDefaultList()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPageScreen);