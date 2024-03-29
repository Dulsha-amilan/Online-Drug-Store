import { Alert, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Icon } from '@rneui/themed';
import { TouchableOpacity } from 'react-native';
import { useTransitionProgress } from 'react-native-screens';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db} from '../../firebase/firebaceInit';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import { ActivityIndicator } from 'react-native-paper';


function LoginField(p:any){
  const stack =p.stack;
  const [email,setEmail]=React.useState('');
  const [password,setPassword]=React.useState('');
    return(
      <View style={{ marginTop:200}}>
        <View style={{
          backgroundColor:'#1A998E',
          borderRadius:20,height:70,
          marginHorizontal:30,justifyContent:'center',
          paddingLeft:20,
  
        }}>
          <TextInput placeholder='Your Email'
          placeholderTextColor={"#aaa"}
          onChangeText={(email)=>setEmail(email)}
          style={{
            fontSize:18,
            color:'black'
          
          }}
          ></TextInput>
  
  
  
        </View>
        <View style={{
          marginTop:10,
          backgroundColor:'#1A998E',
          borderRadius:20,height:70,
          marginHorizontal:30,justifyContent:'center',
          paddingLeft:20,
  
        }}>
          <TextInput placeholder='Password'
          secureTextEntry={true}
          placeholderTextColor={"#aaa"}
          onChangeText={(password)=>setPassword(password)}
          style={{
            fontSize:18,
            color:'black'
          
          }}
          ></TextInput>
  
  
  
        </View>
        <SigninButton u_mail={email}  u_password={password}  stack={stack}/>
  
      </View>
    );
  }
  function SigninButton(p:any){
    const stack=p.stack;
    const u_mail=p.u_mail;  // Fix typo here: change u_email to u_mail
    const u_password=p.u_password;
  
    const[isLogging,setIsLogging]=useState(false)
    function getUser() {
      getDocs(
          query(
              collection(db, 'Users'),
              where('email', '==', u_mail.toLowerCase())
          )
      ).then(ds => {
          setIsLogging(false);
          if (ds.size === 1) {
              const dt = ds.docs[0].data();
              if (dt.password === u_password) {
                  if (u_mail.toLowerCase() === 'admin@gmail.com' && u_password === 'admin') {
                      // Admin login successful
                      p.stack.navigate('AdminHome');
                  } else {
                      // Normal user login successful
                      p.stack.navigate('Home');
                  }
              } else {
                  Alert.alert('Message', 'Incorrect Email or Password');
              }
          } else {
              Alert.alert('Message', 'Can\'t find User');
          }
      }).catch((error) => {
          setIsLogging(false);
          console.error('Error getting user:', error);
      });
  }
    
    
  
    function gotoSignup(){
      stack.navigate('SignUp')
    }
  
    function gotoHome(){
      setIsLogging(true);
        getUser();
      
    }
  
    return(
      <View style={{ flexDirection:"row",marginTop:20}}>
        <TouchableOpacity onPress={gotoSignup}>
          <View style={{height:70,flex:1,justifyContent:'center'}}>
            <Text style={{fontSize:25,color:'black',marginLeft:40,fontWeight:'500'}}>Sign Up</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={gotoHome}>
          <View style={{height:70,flex:1,justifyContent:'center',}}>
            <View style={{ width:50,height:50,backgroundColor:'#1A998E',borderRadius:100,justifyContent:'center',alignItems:'center',marginLeft:50}}> 
             
              {
                (isLogging) ?   <ActivityIndicator color='white'/>
                :
                <Icon name={'arrow-forward'} type='ionicon'/>
              }
               {/* <Icon name={'arrow-forward'} type='ionicon'/> */}
            
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
      require('../../assets/img/Untitled.png')
    }resizeMode='cover'/>
    <Text style={
      {
        fontSize:45,color:'white',fontWeight:'600',
        marginTop:100,marginLeft:20
      }
    }>{'...................\n.....'}</Text>
   
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

function then(arg0: (ds: any) => void) {
  throw new Error('Function not implemented.');
}
