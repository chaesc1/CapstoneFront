import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import isTablet from "../utils/validationSize";

export default function CounselingPage({ navigation }) {
  const [isTabletScreen, setIsTabletScreen] = useState(isTablet());

  useEffect(() => {
    const updateScreenSize = () => {
      setIsTabletScreen(isTablet());
    };

    Dimensions.addEventListener("change", updateScreenSize);

    return () => {
      Dimensions.removeEventListener("change", updateScreenSize);
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ width: "100%", alignItems: "center", gap: 20 }}>
        <Text style={{ fontWeight: "bold", fontSize: 30 }}>끝말잇기</Text>
        <View
          style={{
            width: "100%",
            height: 30,
            backgroundColor: "white",
            flexDirection: "row",
            justifyContent: "space-around",
            padding: 10,
            paddingVertical: 30,
            height: 200,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate("WordChain")}>
            <Text
              style={{
                backgroundColor: "#FF6D60",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                display: "flex",
                padding: 20,
                fontWeight: 600,
              }}>
              내가 먼저 할래
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("WordChain")}
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}>
            <Text
              style={{
                backgroundColor: "#FF6D60",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                display: "flex",
                padding: 20,
                fontWeight: 600,
              }}>
              너가 먼저 해
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3E99F",
    justifyContent: "center",
    alignContent: "center",
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
