import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet,ScrollView, TouchableOpacity } from 'react-native';
import PlayerData from './PlayerData';
import { Fonts } from '../screens/style';
import { useNavigation } from '@react-navigation/native';

const YourComponent = () => {
 
  const navigation= useNavigation()
  const handleNavigate = () => {
    // navigation.navigate('ParticularGroundScreen');
}
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
 
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    
    return () => clearInterval(intervalId);
  }, []);

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthsInThreeWords = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const currentDay = daysOfWeek[currentDateTime.getDay()];
  const currentMonth = monthsInThreeWords[currentDateTime.getMonth()];
  const currentDate = currentDateTime.getDate();
 

  return (
    <View>
    <TouchableOpacity onPress={handleNavigate}>
    <View style={styles.container}>
      <Text style={[styles.header,{paddingTop:8}]}>{currentDay} <Text >{`${currentDate} ${currentMonth} `}| 1:00h </Text>
      </Text>
      
      <Text style={styles.paragraph}>300 miles away. Hollywood.</Text>
      <View style={styles.avatarContainer}>
        <PlayerData/>
     
      </View>
      <View style={styles.containerThird}>
        <Text style={[styles.header,{fontSize:12}]}>Friendly | <Text style={styles.innerTExtLevel}>Level 1.5 - 2.5 </Text></Text>

      </View>
    </View>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  innerTExtLevel:{
    color: '#909090',
    fontSize: 12,
    letterSpacing:0.2,
    fontFamily:Fonts.MEDIUM,
  },
  containerThird:{
borderTopWidth: 1,
marginTop:18,
paddingTop:10,
paddingBottom:10,
flex:1,
justifyContent:'center',
borderColor: 'rgba(0, 0, 0, 0.25)',
shadowOffset: { width: 0, height: 1 },
shadowRadius: 2,
shadowOpacity: 1,
color: '#212121',
fontFamily:Fonts.MEDIUM,
backgroundColor: 'rgba(64, 134, 57, 0.05)'
  },
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 'auto',
gap:11,
    alignItems:'flex-start',
    // paddingLeft:10, 
      paddingRight:15,
       flexWrap: 'wrap',
       height:'auto'
  },
  container: {
    borderRadius:10,
    borderColor:'#A6A6A6',
    borderWidth: 1,
    backgroundColor: 'rgba(64, 134, 57, 0.05)',
height:'auto',
letterSpacing:0.2,

  },
  header: {
  
    fontSize: 14,
    color:'#474747',
    fontFamily:Fonts.MEDIUM,
    // paddingTop:8,
    paddingLeft:10,
      paddingRight:15,
  },
  // subHeader: {
  //   fontSize: 16,
  //   marginBottom: 10,
  //   color:'black'
  // },
  paragraph: {
    fontSize: 12,
    marginBottom: 15,
    color:'#959595',
    letterSpacing:0.5,
    fontFamily:Fonts.MEDIUM,
    paddingLeft:10,
      paddingRight:15,
      // paddingLeft:5,
  },
 
});

export default YourComponent;
