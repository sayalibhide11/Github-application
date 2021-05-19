import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GobackBtn from "../components/GobackBtn";
import { info } from "../types";

import Share from "../components/Share";

export default function Header(props: info) {
  const navigation = useNavigation();
  const onClick = (
    login: string,
    followersUrl: string,
    followingUrl: string
  ) => {
    console.log(login, followersUrl);
    navigation.navigate("topTab", {
      name: login,
      followersUrl: followersUrl,
      followingUrl: followingUrl,
    });
  };
  return (
    <View style={Styles.Container} >
      <View style={Styles.subContainer}>
        <GobackBtn />
        <Text style={Styles.headerText}>Profile</Text>
        <View style={Styles.button} >
          <Button 
            title="Followers"
            onPress={() =>
              onClick(props.login, props.followersUrl, props.followingUrl)
            }
          />
          <Share/> 
        </View>
        
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  Container: {
    backgroundColor: "purple",
  },
  
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 50,
    marginBottom: 7,
  },

  headerText: {
    fontWeight: "bold",
    fontSize: 25,
    color: "white",
    alignItems: 'center',
  },
  leftIcon: {
    color: "white",
  },
  button: {
    marginRight: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
});
