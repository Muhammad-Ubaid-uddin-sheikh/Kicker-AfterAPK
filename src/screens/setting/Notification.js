import React, { useState } from 'react'
import { View ,Text,ScrollView,StyleSheet} from 'react-native'
import ToggleSwitch from 'toggle-switch-react-native'
import { Fonts } from '../style';
const Notificaciones= () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [Sound, setSound] = useState(true);
  const [Vibrate, setVibrate] = useState(true);
  const [App, setApp] = useState(false);
    const [Email, setEmail] = useState(true);
    const [Notification, setNotification] = useState(false);
  return (
    <ScrollView backgroundColor={'white'}>
    <View style={styles.MainContainer}>

    <View style={styles.containerToggle}>
      <Text style={styles.leftText}>Notificacion es generales</Text>
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
      <Text style={styles.leftText}>Sonido</Text>
      <Text style={styles.rightToggle}>
   <ToggleSwitch
  isOn={Sound}
  onColor="#408639"
  offColor="#EEE"
  size=" Medium"
  onToggle={() =>  setSound(!Sound)}/>
  
  </Text>


    </View>
    <View style={[styles.containerToggle,{marginTop:28}]}>
      <Text style={styles.leftText}>Vibración</Text>
      <Text style={styles.rightToggle}>
   <ToggleSwitch
  isOn={Vibrate}
  onColor="#408639"
  offColor="#EEE"
  size=" Medium"
  onToggle={() =>  setVibrate(!Vibrate)}/>
  
  </Text>


    </View>
   
    <View style={[styles.containerToggle,{marginTop:28}]}>
      <Text style={styles.leftText}>Actualizacio nes de la app</Text>
      <Text style={styles.rightToggle}>
   <ToggleSwitch
  isOn={App}
  onColor="#408639"
  offColor="#EEE"
  size=" Medium"
  onToggle={() =>  setApp(!App)}/>
  
  </Text>


    </View>
    <View style={[styles.containerToggle,{marginTop:28}]}>
      <Text style={styles.leftText}>Recibir notificacion es vía</Text>
      <Text style={styles.rightToggle}>
   <ToggleSwitch
  isOn={Email}
  onColor="#408639"
  offColor="#EEE"
  size=" Medium"
  onToggle={() =>  setEmail(!Email)}/>
  
  </Text>


    </View>
    <View style={[styles.containerToggle,{marginTop:28}]}>
      <Text style={styles.leftText}>No recibir notificacion es</Text>
      <Text style={styles.rightToggle}>
   <ToggleSwitch
  isOn={Notification}
  onColor="#408639"
  offColor="#EEE"
  size=" Medium"
  onToggle={() =>  setNotification(!Notification)}/>
  
  </Text>


    </View>

    </View>
     </ScrollView>
  )
}
const styles = StyleSheet.create({
 
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
  letterSpacing: 0.2
},
rightToggle: {
  textAlign: 'right',
  // Additional styling for the right text if needed
},
})
export default Notificaciones
