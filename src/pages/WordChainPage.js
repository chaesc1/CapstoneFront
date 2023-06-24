import { useState, useEffect } from "react";
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
import isTablet from "../utils/validationSize";
import GamePhone from "../components/GamePhone";
import GameTablet from "../components/GameTablet";

export default function WordChainPage({ navigation }) {
  const [message, setMessage] = useState("");
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

  const array = [
    {
      user: "gold",
      content: "끝말잇기 할래? 내가 먼저할게. 후추!",
    },
    {
      user: "me",
      content: "추석",
    },
    {
      user: "gold",
      content: "석류",
    },
    {
      user: "me",
      content: "유치원",
    },
    {
      user: "gold",
      content: "원숭이",
    },
    {
      user: "me",
      content: "이빨",
    },
  ];

  return !isTabletScreen ? (
    <GamePhone styles={styles} array={array} />
  ) : (
    <GameTablet styles={styles} array={array} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3E99F",
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
  chatAlignment: {},
  chat: {
    flexDirection: "row",
    gap: 12,
    alignItems: "flex-end",
    padding: 2,
    width: "80%",
  },
  goldPicture: {
    width: 45,
    height: 40,
  },
  chatBox: {
    backgroundColor: "white",
    borderRadius: 5,
  },
  chatContent: {
    margin: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  micButton: {
    backgroundColor: "#FF6D60",
    borderRadius: 5,
    marginRight: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  sendMic: {
    width: 11,
    height: 20,
  },
  input: {
    flex: 1,
    height: 30,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 5,
    paddingLeft: 10,
  },
  sendButton: {
    backgroundColor: "#FF6D60",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  sendButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
