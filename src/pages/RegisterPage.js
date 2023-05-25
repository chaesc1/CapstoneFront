import React ,{useState,useEffect} from 'react';
import {StyleSheet, View, Text,Alert,TextInput,Button,TouchableWithoutFeedback,Keyboard,TouchableOpacity,SafeAreaView,Platform} from 'react-native';
import { StatusBar } from "expo-status-bar";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import AsyncStorage from "@react-native-async-storage/async-storage";
import validationRules from '../utils/validationRules';
import Input from '../utils/input';

export default function RegisterPage({navigation}) {
  // const [type, setType] = useState('로그인'); // 로그인 / 등록
  // const [action, setAction] = useState('로그인'); // 로그인 / 등록
  // const [actionMode, setActionMode] = useState('회원가입'); // 회원가입 / 로그인 화면으
  //   const [hasErrors, setHasErrors] = useState(false);

  //   const [form, setForm] = useState({
  //     email: {
  //       value: '',
  //       type: 'textInput',
  //       rules: {
  //         isRequired: true,
  //         isEmail: true,
  //       },
  //       valid: false,
  //     },
  //     password: {
  //       value: '',
  //       type: 'textInput',
  //       rules: {
  //         isRequired: true,
  //         minLength: 6,
  //       },
  //       valid: false,
  //     },
  //     confirmPassword: {
  //       value: '',
  //       type: 'textInput',
  //       rules: {
  //         confirmPassword: 'password',
  //       },
  //       valid: false,
  //     },
  //   });
  
  //   updateInput = (name, value) => {
  //     setHasErrors(false);
  //     let formCopy = form;
  //     formCopy[name].value = value;
  //     let rules = formCopy[name].rules;
  //     let valid = validationRules(value, rules, formCopy);
  //     formCopy[name].valid = valid;
  //     setForm(form => {
  //       return {...formCopy};
  //     });
  //   };

  //   confirmPassword = () => {
  //     return type != '로그인' ? (
  //       <Input
  //         value={form.confirmPassword.value}
  //         type={form.confirmPassword.type}
  //         secureTextEntry={true}
  //         placeholder="비밀번호 재입력"
  //         placeholderTextColor={'#ddd'}
  //         onChangeText={value => updateInput('confirmPassword', value)}
  //       />
  //     ) : null;
  //   };

  //   formHasErrors = () => {
  //   return hasErrors ? (
  //     <View style={styles.errorContainer}>
  //       <Text style={styles.errorLabel}>
  //         앗! 로그인 정보를 다시 확인해주세요~
  //       </Text>
  //     </View>
  //   ) : null;
  // };

  // changeForm = () => {
  //   type === '로그인'
  //     ? (setType('등록'), setAction('등록'), setActionMode('로그인 화면으로'))
  //     : (setType('로그인'), setAction('로그인'), setActionMode('회원가입'));
  // };

  // submitUser = () => {
  //   //Init.
  //   let isFormValid = true;
  //   let submittedForm = {};
  //   const formCopy = form;

  //   for (let key in formCopy) {
  //     if (type === '로그인') {
  //       if (key !== 'confirmPassword') {
  //         isFormValid = isFormValid && formCopy[key].valid;
  //         submittedForm[key] = formCopy[key].value;
  //       }
  //     } else {
  //       isFormValid = isFormValid && formCopy[key].valid;
  //       submittedForm[key] = formCopy[key].value;
  //     }
  //   }

  //   if (isFormValid) {
  //     if (type === '로그인') {
  //       console.log('로그인: ');
  //       for (let key in submittedForm) {
  //         console.log(submittedForm[key]);
  //       }
  //     } else {
  //       console.log('회원가입: ');
  //       for (let key in submittedForm) {
  //         console.log(submittedForm[key]);
  //       }
  //     }
  //   } else {
  //     setHasErrors(true);
  //   }
  // };
 return (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={styles.container}>
        <View style={styles.smallContainer}>
        <Text style={styles.Text}>회원가입</Text>
        {/* 텍스트입력 */}
        <View style={styles.fixToInput}>
          <TextInput
                style={styles.textFormTop}
                placeholder={'이름'}
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
                placeholder={'이메일 주소'}
                //onChangeText={value => updateInput('email', value)}
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
                //onChangeText={value => updateInput('password', value)}
                autoCapitalize="none"
                returnKeyType="next"
                // onSubmitEditing={() =>
                //   passwordInputRef.current && passwordInputRef.current.focus()
                // }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
              {/* {confirmPassword()}
              {formHasErrors()} */}
              <TextInput
                style={styles.textFormTop}
                placeholder={'비밀번호 확인'}
                secureTextEntry={true} // 비밀번호 타입으로 변경
                //onChangeText={(userPassword) => setUserId(userPassword)}
                autoCapitalize="none"
                returnKeyType="next"
                // onSubmitEditing={() =>
                //   passwordInputRef.current && passwordInputRef.current.focus()
                // }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
        </View>
        {/* 버튼 */}
        </View>  
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>회원가입</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={{marginTop: 40}}>
        <View style={styles.button}>
          <Button title={action} color="#48567" onPress={submitUser} />
        </View>
        <View style={styles.button}>
          <Button title={actionMode} color="#48567" onPress={changeForm} />
        </View>
        <View style={styles.button}>
          <Button
            title="비회원 로그인"
            color="#48567"
            onPress={() => goWithoutLogin()}
          />
        </View>
      </View> */}
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
    gap: -100,
  },
  smallContainer: {
    backgroundColor : "#FDFBEC",
    alignItems: "center",
    justifyContent: "center",
    width : wp('75%'),  // 스크린 가로 크기 100%
    height : hp('70%'), // 스크린 세로 크기 70%
    borderRadius : 10,
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop : 30,
  },
  button: {
    width: 100,
    height: 40,
    backgroundColor: "#1E2B22",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginHorizontal : 10,
    marginBottom : 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});