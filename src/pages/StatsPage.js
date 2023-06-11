import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import {
  heightPercentageToDP,
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import isTablet from "../utils/validationSize";
import Layout from "../components/Layout";
import Frequent from "../components/Stats/Frequent";
import Danger from "../components/Stats/Danger";

function StatsPage() {
  // const fontSize = width * 0.05; // 폰트 크기를 너비의 일정 비율로 계산
  const [isTabletScreen, setIsTabletScreen] = useState(isTablet());
  const [isFrequent, setIsFrequent] = useState(true);

  return (
    <Layout setIsTabletScreen={setIsTabletScreen}>
      <Text style={{ fontWeight: "bold", fontSize: wp("8%") }}>
        {isFrequent ? "자주 대화한 내용" : "위험 의심 내용"}
      </Text>
      <View
        style={{
          flex: 1,
          backgroundColor: "#FDFBEC",
          marginTop: heightPercentageToDP("3%"),
          borderRadius: "2%",
        }}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              flex: 1,
              height: hp("6%"),
              justifyContent: "center",
              alignItems: "center",
              borderBottom: isFrequent ? "1px solid #000000" : undefined,
            }}
            onPress={() => setIsFrequent(true)}>
            <Text
              style={{
                textAlign: "center",
              }}>
              자주 대화한 내용
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              height: hp("6%"),
              justifyContent: "center",
              alignItems: "center",
              borderBottom: !isFrequent ? "1px solid #000000" : undefined,
            }}
            onPress={() => setIsFrequent(false)}>
            <Text style={{ textAlign: "center" }}>위험 의심 내용</Text>
          </TouchableOpacity>
        </View>
        {isFrequent ? <Frequent /> : <Danger />}
      </View>
    </Layout>
  );
}

export default StatsPage;
const styles = StyleSheet.create({});
