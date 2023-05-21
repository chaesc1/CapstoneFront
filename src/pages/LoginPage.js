import React from 'react';
import {StyleSheet, View, Text,Alert,TextInput,Button,TouchableWithoutFeedback,Keyboard,TouchableOpacity,SafeAreaView} from 'react-native';
import { StatusBar } from "expo-status-bar";
import MyButton from '../components/MyButton';
import { Modal } from 'react-native-web';

export default function LoginPage({navigation}) {
    const [userId, setUserId] = React.useState('');
    const [userPassword, setUserPassword] = React.useState('');

 return (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={styles.container}>
        <Text style={styles.Text}>응애</Text>
        <View style={styles.fixToInput}>
          <TextInput
                style={styles.textFormTop}
                placeholder={'아이디'}
                onChangeText={(userId) => setUserId(userId)}
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
                placeholder={'비밀번호'}
                secureTextEntry={true} // 비밀번호 타입으로 변경
                onChangeText={(userPassword) => setUserId(userPassword)}
                autoCapitalize="none"
                returnKeyType="next"
                // onSubmitEditing={() =>
                //   passwordInputRef.current && passwordInputRef.current.focus()
                // }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
        </View>
          
        <View style={styles.fixToText}>
          {/* 로그인 하면 회원이 접근가능한 page로 */}
          <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('')}>
            <Text style={styles.startButtonText}>로그인</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('Register')}>
            <Text style={styles.startButtonText}>회원가입</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('')}>
            <Text style={styles.startButtonText}>체험해보기</Text>
          </TouchableOpacity>
    </SafeAreaView>
  </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  Text: { 
    bottom:150,
    color: "black",
    fontSize: 70 ,
    fontWeight: 'bold',
    marginTop : 40
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fixToInput: {
    flexDirection: 'col',
    justifyContent: 'space-between',
    marginTop : -40
  },
  container: {
    flex: 1,
    backgroundColor: "#F3E99F",
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
  },
  textFormTop: {
    width: 250,
    backgroundColor: "#FFFFFF",
    marginBottom: 10,
    paddingHorizontal: 20,
    height: 50,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1
  },
  startButton: {
    width: 100,
    height: 40,
    backgroundColor: "#1E2B22",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginHorizontal : 10
  },
  startButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});