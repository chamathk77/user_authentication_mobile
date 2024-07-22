import { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FlatButton from '../UI/FlatButton'
import AuthForm from './AuthForm';
import { Colors } from '../../constants/styles';
import React from 'react';

function AuthContent({ isLogin, onAuthenticate,  }:any) {
  const navigation=useNavigation()

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  function switchAuthModeHandler() {
    
    console.log('Switch Mode')
    if(isLogin==true){
      navigation.replace("Signup")

    }else{
      navigation.replace("Login")
    }
  }

  function submitHandler(credentials: any) {
    let { email, confirmEmail, password, confirmPassword } = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes('@');
    const passwordIsValid = password.length > 6;
    
    const emailsAreEqual = email === confirmEmail;
    const passwordsAreEqual = password === confirmPassword;

    if  (
      // !emailIsValid ||
      // !passwordIsValid ||
      // (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
      true
    ) {
      // Alert.alert('Invalid input', 'Please check your entered credentials.');
      // setCredentialsInvalid({
      //   email: !emailIsValid,
      //   confirmEmail: !emailIsValid || !emailsAreEqual,
      //   password: !passwordIsValid,
      //   confirmPassword: !passwordIsValid || !passwordsAreEqual,
      // });
      // return;
      // console.log('user name ' + email + ' password ' + password)
      
    onAuthenticate({email, password} );
    }
  }

  return (
    <View style={styles.authContent}>
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
      <View style={styles.buttons}>
        <FlatButton onPress={switchAuthModeHandler}>
          {isLogin ? 'Create a new user' : 'Log in instead'}
        </FlatButton>
      </View>
    </View>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  authContent: {
    marginTop: 64,
    marginHorizontal: 32,
    padding: 16,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
  },
  buttons: {
    marginTop: 8,
  },
});