import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Icon } from '@rneui/themed';
import { TouchableOpacity } from 'react-native-gesture-handler';

function LoginField(){
    return(
      <View style={{ marginTop:200}}>
        <View style={{
          backgroundColor:'white',
          borderRadius:20,height:70,
          marginHorizontal:30,justifyContent:'center',
          paddingLeft:20,
  
        }}>
          <TextInput placeholder='Name'
          placeholderTextColor={"#000"}
          ></TextInput>
  
  
  
        </View>
        <View style={{
          marginTop:10,
          backgroundColor:'white',
          borderRadius:20,height:70,
          marginHorizontal:30,justifyContent:'center',
          paddingLeft:20,
  
        }}>
          <TextInput placeholder='Your Email'
          placeholderTextColor={"#000"}></TextInput>
  
  
  
        </View>
        <View style={{
          marginTop:10,
          backgroundColor:'white',
          borderRadius:20,height:70,
          marginHorizontal:30,justifyContent:'center',
          paddingLeft:20,
  
        }}>
          <TextInput placeholder='Password'
          placeholderTextColor={"#000"}></TextInput>
  
  
  
        </View>
        <SigninButton/>
  
      </View>
    );
  }
  function SigninButton(){
    return(
  
    <View style={{ flexDirection:"row",marginTop:20}}>
    <View style={{height:70,flex:1,justifyContent:'center'}}>
      <Text style={{fontSize:25,color:'#fff',marginLeft:40,fontWeight:'500'}}>Sign In</Text>
    </View>

    <View style={{height:70,flex:1,justifyContent:'center',}}>
      <View style={{ width:50,height:50,backgroundColor:'white',borderRadius:100,justifyContent:'center',alignItems:'center'}}> 
      <Icon name={'arrow-forward'} type='ionicon'/>
      </View>
    
    </View>
  
  </View>
 
    );
  }
const SignupScreen = () => {
  return (

     <View style={sty.container}>
    
    <Image style={{
      width:'100%',height:'100%', 
      position:'absolute'
    }} source={
      require('../../assets/img/1.png')
    }resizeMode='cover'/>
    <Text style={
      {
        fontSize:45,color:'white',fontWeight:'600',
        marginTop:100,marginLeft:20
      }
    }>{'Create Account'}</Text>
   
    <KeyboardAwareScrollView keyboardShouldPersistTaps={'never'}>
    <LoginField/>

    </KeyboardAwareScrollView>
    </View>
   
  )
}
const sty=StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'white'
    }
  })
export default SignupScreen

const styles = StyleSheet.create({})