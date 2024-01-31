import React, { useState } from 'react'
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import  Icons  from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import FeildNavigation from './feildNavigations/FeildNavigation'
import { Fonts } from '../style';
import LocationIcon from 'react-native-vector-icons/FontAwesome6'
import StarIcons from 'react-native-vector-icons/Fontisto'
const ParticularGroundScreen = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();

 const [color , SetColor] = useState(false)
 const handlePress=()=>{
  SetColor(!color)
 }

  const [availability, setAvailability] = useState(true);

  return (
    
    <View style={styles.container}>
       <StatusBar backgroundColor={'white'} barStyle="light-content" />
       <View style={styles.imageconta}></View>
    <Image 
      source={{ uri: item.source }}
      style={styles.backgroundImage}
   />
    <StatusBar translucent={true} backgroundColor={'transparent'}  />
      <View style={{ flexDirection: 'row', justifyContent:"space-between", padding: 16 ,width:'100%',alignItems:'center',position:'absolute',top:25}}>
      
        <TouchableOpacity onPress={()=>navigation.goBack()} >
          <Icon name="keyboard-arrow-left"  color="white" size={18} style={{backgroundColor:'rgba(0, 0, 0, 0.35)',padding:5,borderRadius:50}}  />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress} >
        <Icons name="staro"   size={16} color={color ? '#FCC767' : 'white'} style={{backgroundColor:'rgba(0, 0, 0, 0.35)',padding:5,borderRadius:50}}  />
        </TouchableOpacity>
      </View>
   <View style={styles.TitleGroundDiv}>
   
<Text style={styles.textGroundTitle}>{item.name}</Text>
<Text style={[styles.buttonText, { color: item.available ? 'green' : '#A0A0A0' }]}>
                        {item.available ? 'Disponible' : 'No disponible'}
                    </Text>
 {/* <Text style={ [styles.buttonText,{ color: availability ? '#408639' : '#A0A0A0' }]}>{availability ? 'Disponible' : 'No Disponible'}</Text> */}

</View>
<View style={styles.locationTextContainer}>
<LocationIcon name='location-dot' style={{color:'#408639'}} size={15} />
<Text style={styles.textLocation}> {item.address} </Text>
<StarIcons name='star' style={{color:'#FCC767',marginLeft:10}} size={12} />
<Text style={styles.textLocation}> {item.rating}</Text>
</View>
   <FeildNavigation/>
    </View>
  )
}
const styles = StyleSheet.create({
  // button: {
  //   paddingHorizontal: 20,
  //   paddingVertical: 10,
  //   borderRadius: 5,
  // },
  locationTextContainer:{
    flexDirection: 'row',
    justifyContent: "flex-start",
    alignItems:"center",
    paddingLeft: 15,
    paddingRight: 15,
  },
  textLocation:{
    fontSize:14,
    fontFamily:Fonts.REGULAR,
    color:'#A0A0A0',
    alignItems:'center',
    flexDirection:'row'
  },
  buttonText: {
    fontSize:15,
    fontFamily:Fonts.MEDIUM
  },
  TitleGroundDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:"center",
    paddingLeft: 15,
    paddingRight: 15,
   
  },
  textGroundTitle:{
    fontSize: 19,
    color: 'black',
    letterSpacing: 0.1,
    //   width:'auto',
    lineHeight: 36,
    fontFamily: Fonts.MEDIUM,
   
    paddingTop: 5
  },
  container: {
    flex: 1,
    position: 'relative',
    marginTop: 0,
    padding: 0,
    backgroundColor: 'white',


},
backgroundImage:{
  width:"100%",
  height:223,
  objectFit:'cover'
}
  
})

export default ParticularGroundScreen