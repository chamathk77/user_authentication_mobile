import { Alert, Text, View } from 'react-native'
import React, { Component, useState } from 'react'
import AuthContent from '../components/Auth/AuthContent'
import { Sign_In } from '../util/auth'
import LoadingOverlay from '../components/UI/LandingOverlay'
import { useDispatch } from 'react-redux'
import { Update_Email, Update_isAuthenticated, Update_token } from '../redux/reducers/LoginReducer'

function LoginScreen() {
  const dispatch=useDispatch()

  const [isAuthenticating, setIsAuthenticating] = useState(false)

  async function Sign_In_Handler({ email, password }: any) {



    console.log('Sign_In_Handler entered------------------------->>>>>>>>>>>')
    console.log('email------>>>>>>>>>> ' + email)
    console.log('password------>>>>>>>>>> ' + password)

    setIsAuthenticating(true)
    try {

      const res=await Sign_In(email, password)
      
      console.log("res----------->>>>token-----------",res)
      dispatch(Update_token(res))
      dispatch(Update_isAuthenticated(true))


    } catch (error: any) {
      Alert.alert('Authentication failed!', "Please check your credentials or try again later.")

      console.log('error in Sign_In_Handler--------------->>>>>>>>>>>>>')
      dispatch(Update_isAuthenticated(false))
    }
    setIsAuthenticating(false)

  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging user in..." />
  }

  return (
    <AuthContent isLogin={true} onAuthenticate={Sign_In_Handler} />
  )
}

export default LoginScreen