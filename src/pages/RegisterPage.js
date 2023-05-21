import React ,{useState,useEffect} from 'react';
import {StyleSheet, View, Text,Alert,TextInput,Button,TouchableWithoutFeedback,Keyboard,TouchableOpacity,SafeAreaView} from 'react-native';
import { StatusBar } from "expo-status-bar";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RegisterPage({navigation}) {
    const [userId, setUserId] = React.useState('');
    const [userPassword, setUserPassword] = React.useState('');
    const [userPasswordchk, setUserPasswordchk] = useState('');
    const [loading, setLoading] = useState(false);
    const [errortext, setErrortext] = useState('');
    const [errortext2, setErrortext2] = useState('');
    const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);
     
 return (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={styles.container}>
        <Text style={styles.Text}>회원가입</Text>
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
          <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.startButtonText}>회원가입</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  Text: { 
    bottom:150,
    color: "black",
    fontSize: 50 ,
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