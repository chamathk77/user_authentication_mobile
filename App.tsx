import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { StatusBar } from 'expo-status-bar';

import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import { Colors } from './src/constants/styles';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './src/redux/store/store';
import IconButton from './src/components/UI/IconButton';
import { Update_isAuthenticated } from './src/redux/reducers/LoginReducer';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
 const dispatch=useDispatch()
  
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen}  options={{headerRight: ()=><IconButton onPress={() => dispatch(Update_isAuthenticated(false))}/>}}/>
    </Stack.Navigator>
  );
}

function Navigation() {

  const isAuthenticated = useSelector((state: any) => state.Login_and_Signup.LoginUser.isAuthenticated);
  console.log("isAuthenticated--------------->>",isAuthenticated)
  return (
    <NavigationContainer>
      {isAuthenticated ? <AuthenticatedStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </>
  );
}