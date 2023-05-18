import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.goldPicture} source={require("./assets/gold.JPG")} />
      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.startButtonText}>시작하기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A5C9CA",
    alignItems: "center",
    justifyContent: "center",
    gap: "24px",
  },
  goldPicture: {
    width: "20em",
    height: "20em",
  },
  startButton: {
    width: "20em",
    height: "60px",
    backgroundColor: "#395B64",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "15px",
  },
  startButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: "20px",
  },
});
