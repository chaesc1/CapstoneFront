import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Alert,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import MyButton from "../components/MyButton";
import { KeyboardAvoidingView, Modal } from "react-native-web";
import { auth } from "../../firebase";

export default function LoginPage({ navigation }) {
  const [userId, setUserId] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");

  const handleSignUp = () => {
    auth
      .createUserWithIDAndPassword(userId, userPassword)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.userId);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <View style={styles.smallContainer}>
          <Text style={styles.Text}>Text</Text>
          <View style={styles.fixToInput}>
            <TextInput
              style={styles.textFormTop}
              placeholder={"아이디"}
              value={userId}
              onChangeText={(text) => setUserId(text)}
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current && passwordInputRef.current.focus()
              }
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
            />
            <TextInput
              style={styles.textFormTop}
              placeholder={"비밀번호"}
              value={userPassword}
              secureTextEntry={true} // 비밀번호 타입으로 변경
              onChangeText={(text) => setUserPassword(text)}
              autoCapitalize="none"
              returnKeyType="next"
              // onSubmitEditing={() =>
              //   passwordInputRef.current && passwordInputRef.current.focus()
              // }
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
            />
          </View>

          <View style={styles.buttonContainer}>
            {/* 로그인 하면 회원이 접근가능한 page로 */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("")}>
              <Text style={styles.buttonText}>로그인</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Register")}>
              <Text style={styles.buttonText}>회원가입</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("")}>
            <Text style={styles.buttonText}>체험해보기</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  Text: {
    bottom: 150,
    color: "black",
    fontSize: 50,
    fontWeight: "bold",
    marginTop: 40,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  fixToInput: {
    flexDirection: "col",
    justifyContent: "space-between",
    marginTop: -40,
  },
  container: {
    flex: 1,
    backgroundColor: "#F3E99F",
    alignItems: "center",
    justifyContent: "center",
    gap: -100,
  },
  smallContainer: {
    backgroundColor: "#FDFBEC",
    alignItems: "center",
    justifyContent: "center",
    width: wp("75%"), // 스크린 가로 크기 100%
    height: hp("70%"), // 스크린 세로 크기 70%
    borderRadius: 10,
  },
  textFormTop: {
    width: 250,
    backgroundColor: "#FFFFFF",
    marginBottom: 10,
    paddingHorizontal: 20,
    height: 50,
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  button: {
    width: 100,
    height: 40,
    backgroundColor: "#1E2B22",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
