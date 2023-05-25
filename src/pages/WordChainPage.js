import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function WordChainPage({ navigation }) {
  const [message, setMessage] = useState("");

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

  return (
    <View style={styles.container}>
      <ScrollView>
        {array.map((item, i) => {
          return (
            <View
              key={i}
              style={{
                width: "100%",
                display: "flex",
                alignItems: item.user === "gold" ? "flex-start" : "flex-end",
                justifyContent: "flex-end",
                marginBottom: 10,
              }}>
              <View
                style={[
                  styles.chat,
                  {
                    justifyContent:
                      item.user === "gold" ? "flex-start" : "flex-end",
                  },
                ]}>
                {item.user === "gold" && (
                  <Image
                    style={styles.goldPicture}
                    source={require("../../assets/gold.png")}
                  />
                )}
                <View
                  style={[
                    styles.chatBox,
                    { flex: item.content.length > 15 ? 1 : null },
                  ]}>
                  <Text style={styles.chatContent}>{item.content}</Text>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.micButton}>
          <Image
            style={styles.sendMic}
            source={require("../../assets/mic-ffffff.png")}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="대화를 입력하세요..."
          value={message}
          onChangeText={(text) => setMessage(text)}
        />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>전송</Text>
        </TouchableOpacity>
      </View>
    </View>
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
