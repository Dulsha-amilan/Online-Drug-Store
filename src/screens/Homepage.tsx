import { View, Text, Image } from 'react-native'
import React from 'react'

import { Icon, SocialIcon } from '@rneui/base'
import { Ionicons } from '@expo/vector-icons';

const Homepage = () => {
  return (
    <View style={{
        flex:1,
       
    }}>
      <Header/>
     
    </View>
  )
}
const Header =()=>{
   return(
    <View style={
      {
        flexDirection:"row",
        padding:'5%',

        alignItems:'center'

      }
    }>
      <Image style={
        {
          width:40,
          height:40,
    
        }
      }source={require('../../assets/img/Logo.png')}/>


      <View style={
        {
          flex:1,
       
          alignItems:'center'
        }
      }>
           <Text style={{
            fontSize:25
           }}>
            
            Jaya Pharmacy</Text>
           <Text style={{
            fontSize:16
           }}>Your Pathway to Health & Wellness.</Text>

      </View>
<View style={
  {
    width:40,
    height:40,
  }
}>
<Ionicons name="notifications" size={35} color="black" />


</View>
      </View>
   )






}

export default Homepage