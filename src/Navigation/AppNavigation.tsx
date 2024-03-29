import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import Homepage from '../screens/Homepage';
import Adminpage from '../screens/Adminpage';
const Stack = createStackNavigator();
const AppNavigation = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={
       {headerShown:false}
    }>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignupScreen} options={{
        cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS
      }} />
      <Stack.Screen name="Home" component={Homepage}/>
      <Stack.Screen name="AdminHome" component={Adminpage}/>
   
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default AppNavigation