import React, { useState } from 'react'
import { View ,Text,ScrollView,StyleSheet, TouchableOpacity} from 'react-native'
import ToggleSwitch from 'toggle-switch-react-native'
import { Fonts } from '../style';
import Icons from 'react-native-vector-icons/MaterialIcons'
const Notificaciones= ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [Face, setFace] = useState(true);
  const [Touch, setTouch] = useState(true);
  return (
    <ScrollView backgroundColor={'white'}>
    <View style={styles.MainContainer}>

    <View style={styles.containerToggle}>
      <Text style={styles.leftText}>Face ID</Text>
      <Text style={styles.rightToggle}>
   <ToggleSwitch
  isOn={isEnabled}
  onColor="#408639"
  offColor="#EEE"
  size=" Medium"
  onToggle={() =>  setIsEnabled(!isEnabled)}/>
  
  </Text>
    </View>

    <View style={[styles.containerToggle,{marginTop:28}]}>
      <Text style={styles.leftText}>Recordar detalles de inicio de sesión </Text>
      <Text style={styles.rightToggle}> 
   <ToggleSwitch
  isOn={Face}
  onColor="#408639"
  offColor="#EEE"
  size=" Medium"
  onToggle={() =>  setFace(!Face)}/>
  
  </Text>


    </View>
    <View style={[styles.containerToggle,{marginTop:28}]}>
      <Text style={styles.leftText}>Touch ID</Text>
      <Text style={styles.rightToggle}>
   <ToggleSwitch
  isOn={Touch}
  onColor="#408639"
  offColor="#EEE"
  size=" Medium"
  onToggle={() =>  setTouch(!Touch)}/>
  
  </Text>


    </View>
    <TouchableOpacity style={styles.button} >
    <View style={[styles.containerToggle,{marginTop:20}]} >
    
      <Text style={styles.leftText}>Autenticado r de google</Text>
      <Text style={styles.rightToggle}> <Icons name='arrow-forward-ios' style={styles.eyeIconButoon} size={20}  /> </Text>
  

    </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('CambiarContrasena')} >
    <View style={[styles.containerToggle,{marginTop:25}]}>
    
      <Text style={styles.leftText}>Cambiar contraseña</Text>
      <Text style={styles.rightToggle}>  <Icons name='arrow-forward-ios' style={styles.eyeIconButoon} size={20}  />
      </Text>

   
    </View>
    </TouchableOpacity>
    </View>
     </ScrollView>
  )
}
const styles = StyleSheet.create({
  eyeIconButoon:{
    position: 'absolute',
    right: 22,
    top: 16.5,
    color:'green'
  }, 
  MainContainer:{
    width:'auto',
    backgroundColor:'white',
    flex:1,
    marginTop:20 ,
    paddingLeft:5,
    paddingRight:5
    
   
},
containerToggle: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 16, 
  textAlignVertical:'center'
},
leftText: {
  textAlign: 'left',
  color:'#424242',
  fontFamily: Fonts.MEDIUM,
  fontSize: 16,
  letterSpacing: 0.2,
width:300
},
rightToggle: {
  textAlign: 'right',

},button:{
  marginTop:10
}
})
export default Notificaciones
