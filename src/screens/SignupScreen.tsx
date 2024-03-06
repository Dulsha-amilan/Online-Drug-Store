import { Alert, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Icon } from '@rneui/themed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native-paper';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase/firebaceInit';

function LoginField(){
  const [name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');

  const [saving,setSaving]=useState(false);

  function saveUser(){
  
   setSaving(true);
   addDoc(collection(db,'Users'),{
    name:name,
    email:email,
    password:password
   }).then(t=>{
    setSaving(false);
    Alert.alert("User is succesfully registered");
   }).catch(e =>{
    setSaving(false);
    Alert.alert("User create Faild");
   })
  }

    return(
      <View style={{ marginTop:200}}>
        <View style={{
          backgroundColor:'#1A998E',
          borderRadius:20,height:70,
          marginHorizontal:30,justifyContent:'center',
          paddingLeft:20,
  
        }}>
          <TextInput onChangeText={(v)=>setName(v)} placeholder='Name'
          placeholderTextColor={"#aaa"}
          ></TextInput>
  
  
  
        </View>
        <View style={{
          marginTop:10,
          backgroundColor:'#1A998E',
          borderRadius:20,height:70,
          marginHorizontal:30,justifyContent:'center',
          paddingLeft:20,
  
        }}>
          <TextInput onChangeText={(v)=>setEmail(v)} placeholder='Your Email'
          placeholderTextColor={"#aaa"}></TextInput>
  
  
  
        </View>
        <View style={{
          marginTop:10,
          backgroundColor:'#1A998E',
          borderRadius:20,height:70,
          marginHorizontal:30,justifyContent:'center',
          paddingLeft:20,
  
        }}>
          <TextInput secureTextEntry onChangeText={(v)=>setPassword(v)} placeholder='Password'
          placeholderTextColor={"#aaa"}></TextInput>
  
  
  
        </View>
        <SigninButton sUser={saveUser} saving={saving} />
  
      </View>
    );
  }
  function SigninButton(p:any){
    
    return(
  
    <View style={{ flexDirection:"row",marginTop:20}}>
    <View style={{height:70,flex:1,justifyContent:'center'}}>
      <Text style={{fontSize:25,color:'#1A998E',marginLeft:40,fontWeight:'500'}}>Sign In</Text>
    </View>

    <TouchableOpacity onPress={p.sUser}>
          <View style={{height:70,flex:1,justifyContent:'center',}}>
            <View style={{ width:50,height:50,backgroundColor:'#1A998E',borderRadius:100,justifyContent:'center',alignItems:'center',marginLeft:50}}> 
             
              {
                (p.saving) ?   <ActivityIndicator color='white'/>
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
const SignupScreen = () => {
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