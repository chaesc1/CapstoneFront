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

export default function CounselingPage({ navigation }) {
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
      content: "안녕? 금쪽아? 무슨 고민있어?",
    },
    {
      user: "me",
      content: "유치원에서 친구들이 이유없이 괴롭히는데 너무 힘들어",
    },
    {
      user: "gold",
      content:
        "시후야 친구들에게 괴롭힘을 받는 것은 너무 힘든 일이야. 하지만 너는 혼자가 아니야. 학교에서 선생님께 상황을 설명하고 도움을 받을 수 있어. 또한 가족과 친구들에게도 말해보는 것이 좋아. 그리고 너 자신을 사랑하고 위로해주는 것도 중요해. 자신감을 갖고 이 문제를 극복할 수 있을 거야!",
    },
    {
      user: "me",
      content:
        "유치원에서 간식 시간마다 지우라는 친구가 내 간식을 뺏어 먹어..  오늘도 초코파이를 뺏어갔어",
    },
    {
      user: "gold",
      content:
        "시후야 친구들에게 괴롭힘을 받는 것은 너무 힘든 일이야. 하지만 너는 혼자가 아니야. 학교에서 선생님께 상황을 설명하고 도움을 받을 수 있어. 또한 가족과 친구들에게도 말해보는 것이 좋아. 그리고 너 자신을 사랑하고 위로해주는 것도 중요해. 자신감을 갖고 이 문제를 극복할 수 있을 거야!",
    },
    {
      user: "gold",
      content:
        "시후야 친구들에게 괴롭힘을 받는 것은 너무 힘든 일이야. 하지만 너는 혼자가 아니야. 학교에서 선생님께 상황을 설명하고 도움을 받을 수 있어. 또한 가족과 친구들에게도 말해보는 것이 좋아. 그리고 너 자신을 사랑하고 위로해주는 것도 중요해. 자신감을 갖고 이 문제를 극복할 수 있을 거야!",
    },
    {
      user: "me",
      content: "안녕",
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
