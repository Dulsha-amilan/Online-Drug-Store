import { View, Text } from 'react-native'
import React from 'react'

const CustomLable = (props:any) => {
  return (
    <View>
      <Text style={{
          fontSize: 30,
          marginLeft: 40,
        }}>{props.children}</Text>
    </View>
  )
}
function CustomText(){
  return(
<Text></Text>
  );
}

export default CustomLable