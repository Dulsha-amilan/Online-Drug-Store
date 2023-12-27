import React from 'react';

import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import SignupScreen from './src/screens/SignupScreen';
import AppNavigation from './src/Navigation/AppNavigation';

// import LoginScreen from './src/screens/LoginScreen';


function App(): JSX.Element {
  return (
<View style={sty.container}>
     <AppNavigation/>
      {/* <LoginScreen/> */}
      {/* <SignupScreen/> */}
</View>
   
  );
}
const sty=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  }
})

export default App;
