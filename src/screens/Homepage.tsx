import { View, Text, Image, useWindowDimensions } from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from 'react-native-reanimated-carousel';





const Homepage = () => {
  return (
    <View style={{
        flex:1,
       backgroundColor:'white'
    }}>
      <Header/>
      <CarouselSection/>
      <HomeButtons/>
      <View style={
        {
          flex:1,
        
          margin:'5%'

        }
      }>
        <Text style={
          {
            color:'#999',
            textAlign:'center',
            marginBottom:'29%'
            
          }
        }>This condensed version maintains essential elements while providing users with a quick overview of what they can find and do on the app.<Text style={{
          color:'#00D1FF',
            textAlign:'center',
            marginBottom:'5%' 
        }}> JayaPharmacy.com </Text>@2021 Jaya Pharmacy </Text>
     </View>
    </View>
  )
}
const Header =()=>{
   return(
    <View style={
      {
        flexDirection:"row",
        padding:'5%',
        backgroundColor:'#e9f7e6',
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
            fontSize:25,
            fontWeight: 'bold'
           }}>
            
            Jaya Pharmacy</Text>
           <Text style={{
            fontSize:16,
            
           }}>Your Pathway to Health & Wellness.</Text>

      </View>
<View style={
  {
    width:40,
    height:40,
  }
}>

<Icon name="bell-o" size={30} color="#000" />


</View>
      </View>
   )






}

const CarouselSection =()=>{
  const {width,height}=useWindowDimensions();
  const imgs:any[]=[
    require('../../assets/img/Banner1.png'),
    require('../../assets/img/banner12.png'),
    require('../../assets/img/banner2.png')
  ]
  return(
    <Carousel
    loop
    width={width}
    height={width / 1.6}
    autoPlay={true}
    data={imgs}
    scrollAnimationDuration={1000}
    onSnapToItem={(index) => console.log('current index:', index)}
    renderItem={({ index, item }) => (
        <View
            style={{
                flex: 1,
               
                justifyContent: 'center',
                margin:'5%',
                borderEndEndRadius:10
            }}
        >
           <Image style={{
            width:'100%',
            height:'100%',
            borderRadius:10



           }}source={item}/>
        </View>
    )}
/>
  )
}
type Props={
    image :any,
    text: string
}
const MenuButton =(p:Props)=>{
  const {width,height}=useWindowDimensions();
  return(
    <View style=
    {{
      width:width/3.8,
      height:width/3.8,
      backgroundColor:(p.text)? '#F4F4F4' :'#ffffff00',
      padding:'2%',
      borderRadius:10
    }
    }>
        {
          (p.text) &&
          <Image style={
            {
              width:'60%',
              height:'60%',
              marginTop:7,
              alignSelf:'center'
            }
          }source={p.image}/>
        }
      
      <Text style={{
        color:'black',
        textAlign:'center',
        fontSize: 11,
        marginTop:7
      }}>{p.text}</Text>
      
    </View>
  )
}
const HomeButtons =()=>{
  return(
    <View>
<View style={
  {

       flexDirection:'row',
       justifyContent:'space-evenly'
  }
}>
  <MenuButton image={require('../../assets/img/1.jpeg')} text={'Medications'}/>
  <MenuButton image={require('../../assets/img/2.jpeg')} text={'Health & Wellness'}/>
  <MenuButton image={require('../../assets/img/3.png')} text={'First Aid & Emergency'}/>

</View>
<View style={
  {

       flexDirection:'row',
       justifyContent:'space-evenly',
       marginTop:'5%'
  }
}>
  
  <MenuButton image={require('../../assets/img/4.png')} text={'Beauty & Skincare'}/>
  <MenuButton image={require('../../assets/img/6.jpeg')} text={'Home Health Care'}/>
  <MenuButton image={require('../../assets/img/7.png')} text={'Diet & Nutrition'}/>
</View>
</View>
  );
}

export default Homepage