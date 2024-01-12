import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Icon } from '@rneui/themed';
import { TouchableOpacity } from 'react-native';

function LoginField(p:any){
  const stack =p.stack;
  const [email,setEmail]=React.useState('');
  const [password,setPassword]=React.useState('');
    return(
      <View style={{ marginTop:200}}>
        <View style={{
          backgroundColor:'white',
          borderRadius:20,height:70,
          marginHorizontal:30,justifyContent:'center',
          paddingLeft:20,
  
        }}>
          <TextInput placeholder='Your Email'
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
          <TextInput placeholder='Password'
          placeholderTextColor={"#000"}></TextInput>
  
  
  
        </View>
        <SigninButton stack={stack}/>
  
      </View>
    );
  }
  function SigninButton(p:any){
    const stack=p.stack;
    const u_mail=p.u_email;
    const u_password=p.u_password;

    const email='abc@gmail.com';
    const password='123';

    function gotoSignup(){
      stack.navigate('SignUp')

    }
    function gotoHome(){
      if(u_mail==email && u_password==password){
        
      }
          p.stack.navigate('Home')
    }
    return(
  <View style={{ flexDirection:"row",marginTop:20}}>
   <TouchableOpacity onPress={gotoSignup}>
      <View style={{height:70,flex:1,justifyContent:'center'}}>
      <Text style={{fontSize:25,color:'#fff',marginLeft:40,fontWeight:'500'}}>Sign Up</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={gotoHome}>
    <View style={{height:70,flex:1,justifyContent:'center',}}>
      <View style={{ width:50,height:50,backgroundColor:'white',borderRadius:100,justifyContent:'center',alignItems:'center',marginLeft:50}}> 
      <Icon name={'arrow-forward'} type='ionicon'/>
      </View>
    </View>
    </TouchableOpacity>
   
  
  </View>
    );
  }
const LoginScreen = (props:any) => {
  const stack=props.navigation;
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
    }>{'Welcome\nBack'}</Text>
   
    <KeyboardAwareScrollView keyboardShouldPersistTaps={'never'}>
    <LoginField stack={stack}/>

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
export default LoginScreen

const styles = StyleSheet.create({})