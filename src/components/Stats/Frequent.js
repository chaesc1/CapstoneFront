import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";

const Frequent = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FDFBEC",
        padding: widthPercentageToDP("5%"),
      }}>
      자주 대화
    </View>
  );
};

export default Frequent;
