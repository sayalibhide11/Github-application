import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { Props } from "../types";

import { connect } from "react-redux";
import * as actionTypes from "../redux/actions/constants";

const CustomHeader = (props: Props) => {
  console.log("I am in custom header");
  return ( 
    <View style={Styles.container}>
      <Text style={Styles.text}>GitHub</Text>
      <View style={Styles.searchSection}>
        <EvilIcons name="search" style={Styles.searchIcon} color="grey" />
        <TextInput
          placeholder="Search Users"
          style={Styles.textInput}
          onChangeText={(event) => props.searchedFun(event)}
          value={props.searchedFor}
        />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "purple",
  },
  searchSection: {
    flexDirection: "row",
    backgroundColor: "white",
    marginHorizontal: 6,
    marginBottom: 15,
    padding: 5,
    borderRadius: 13,
    textAlign: "center",
  },
  searchIcon: {
    padding: 3,
    fontSize: 23,
    marginRight: 3,
    marginTop: 2,
  },
  text: {
    marginTop: 37,
    marginBottom: 10,
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
  textInput: {
    width: "100%",
    flex: 1,
    fontSize: 17,
  },
});

const mapStateToProps = (state) => {
  return {
    searchedFor: state.userReducer.searchedFor,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchedFun: (event) =>
      dispatch({ type: actionTypes.ON_SEARCH, payload: event }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomHeader);




