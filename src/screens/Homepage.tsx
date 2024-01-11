import { View, Text } from 'react-native'
import React from 'react'

const Homepage = () => {
  return (
    <View style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }}>
      <Text style={{
        fontSize:30,
        color:'black'
      }}>Homepage</Text>
    </View>
  )
}

export default Homepage