import React from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MatchPlayerDetails from '../../components/MatchesPlayerDetails'
import { Fonts } from '../style'
import Button from '../../components/Button';
const FindGames = ({navigation}) => {
  const handleNavigate = () => {
    navigation.navigate('CustomizeProfile');
}
  return (
    
       
    <View style={styles.MainContainer}>
      <ScrollView style={styles.form} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
    <StatusBar translucent={true} backgroundColor={'transparent'}/>
    <View style={styles.rowContainer}>
   <Text style={styles.MainHeading}>Partidos programados</Text>
    
     <View style={[styles.MainGroundContainer,{paddingTop:20}]} > 
     {/* <TouchableOpacity onPress={() => navigation.navigate('ParticularGroundScreen')}> */}
<MatchPlayerDetails   />
{/* </TouchableOpacity> */}
<View style={styles.GroundContainer}>
<Text style={styles.Groundname}>Arsenal Vs Chelsea</Text>
<Text style={styles.DistanceTExt}>300m away</Text></View>
     </View>

     <View style={styles.MainGroundContainer} > 
<MatchPlayerDetails/>
<View style={styles.GroundContainer}>
<Text style={styles.Groundname}>Madrid Vs ?</Text>
<Text style={styles.DistanceTExt}>500m away</Text></View>
     </View>

     <View style={styles.MainGroundContainer} > 
<MatchPlayerDetails/>
<View style={styles.GroundContainer}>
<Text style={styles.Groundname}>Arsenal Vs Chelsea</Text>
<Text style={styles.DistanceTExt}>1200m away</Text></View>
     </View>

     <View style={styles.MainGroundContainer} > 
<MatchPlayerDetails/>
<View style={styles.GroundContainer}>
<Text style={styles.Groundname}>Arsenal Vs Chelsea</Text>
<Text style={styles.DistanceTExt}>1300m away</Text></View>
     </View>

     <View style={styles.MainGroundContainer} > 
<MatchPlayerDetails/>
<View style={styles.GroundContainer}>
<Text style={styles.Groundname}>Arsenal Vs Chelsea</Text>
<Text style={styles.DistanceTExt}>300m away</Text></View>
     </View>
  </View>
  </ScrollView>
  <View style={styles.nextButton}>
                    <Button text="Comenzar un partido" Link={handleNavigate} />
                </View>
 </View>

  )
}
const styles = StyleSheet.create({
  MainHeading:{
    fontSize:19,
    color:'#212121',
    letterSpacing:0.8,
  width:'auto',

  fontFamily:Fonts.BOLD,
  marginLeft:2,
 
  },
  MainGroundContainer:{
  
    paddingBottom:15
  },
  GroundContainer:{
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems:'flex-start',
    paddingLeft:5,
    paddingRight:5,
    paddingTop:10 
  },
  Groundname:{
fontSize:16,
color:'#61646B',
fontFamily: Fonts.MEDIUM,
  },
  DistanceTExt:{
    fontFamily: 'Satoshi-Medium',
    fontSize:14,
    color:'#AFB1B6'
    
  },
  
  MainContainer:{
    width:'auto',
    backgroundColor:'white',
    flex:1,
    paddingLeft:15,
    paddingRight:20,
    paddingBottom:20,
    height:'100%'
},
form: {
  backgroundColor: '#fff',
  display: 'flex',
  width: 'auto',
  // borderRadius: 8,
  // shadowColor: 'rgba(0, 0, 0, 0.1)',
  // shadowOffset: { width: 0, height: 10 },
  // shadowRadius: 15,
  // shadowOpacity: 1,
  position: 'relative',
  paddingTop: 10,
  height:'auto',
  paddingBottom:20


},
})

export default FindGames