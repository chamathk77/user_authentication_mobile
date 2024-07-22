import { Alert, Text, View } from 'react-native'
import React, { Component, useState } from 'react'
import AuthContent from '../components/Auth/AuthContent'
import { create_user } from '../util/auth'
import LoadingOverlay from '../components/UI/LandingOverlay'
import { Update_isAuthenticated } from '../redux/reducers/LoginReducer'
import { useDispatch } from 'react-redux'

function SignupScreen() {
 
  const dispatch=useDispatch()
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  async function signUp_Handler({ email, password }: any) {

    setIsAuthenticating(true)
    try {

      console.log('Sign Up handler entered------------------------->>>>>>>>>>>')
      console.log('email------>>>>>>>>>> ' + email)
      console.log('password------>>>>>>>>>> ' + password)


      await create_user(email, password)
       dispatch(Update_isAuthenticated(true))


    } catch (error) {

      Alert.alert('Sign Up failed!', "Please check your credentials or try again later.")
      dispatch(Update_isAuthenticated(false))
    }
    setIsAuthenticating(false)
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />
  }


  return (
    <AuthContent onAuthenticate={signUp_Handler} />
  )
}

export default SignupScreen

