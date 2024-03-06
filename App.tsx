import React from 'react';

import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import SignupScreen from './src/screens/SignupScreen';
import AppNavigation from './src/Navigation/AppNavigation';
import { DefaultTheme, PaperProvider } from 'react-native-paper';

// import LoginScreen from './src/screens/LoginScreen';


function App(): JSX.Element {

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#1A998E',
      secondary: 'Black',
    },
  };
  return (
    <PaperProvider theme={theme}> 
<View style={sty.container}>
     <AppNavigation/>
      {/* <LoginScreen/> */}
      {/* <SignupScreen/> */}
</View>
</PaperProvider>
  );
}
const sty=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  }
})

export default App;
