import { Text, View } from 'react-native'
import React, { Component } from 'react'
import AuthContent from '../components/Auth/AuthContent'

function  LoginScreen () {
 
    return (
        <AuthContent isLogin={true}/>
    )
  }

export default LoginScreen