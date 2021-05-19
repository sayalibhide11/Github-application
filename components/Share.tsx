import React from 'react';
import { Share, View, Button, StyleSheet } from 'react-native';
import { EvilIcons } from "@expo/vector-icons";

const ShareExample = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View>
      <EvilIcons onPress={onShare} name="share-google" size={50} style={Styles.icon} />
    </View>
  );
};

const Styles = StyleSheet.create({
  icon: {
    color: "white",
  },
});

export default ShareExample;