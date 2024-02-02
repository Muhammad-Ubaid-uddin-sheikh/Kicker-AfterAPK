import React,{useState} from 'react';
import { Text, View, StatusBar, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native'
import { Fonts } from '../style';
import Button from '../../components/Button';
import VerticalSlider from './VerticalSlides';
import CheckPlayer from '../../components/CustomButton'
import ButtonEditDashboard from '../../components/ButtonEditDashboard'
import { useSelector } from 'react-redux';
const Dashboard = ({navigation}) => {
    // const [loading, setLoading] = useState(false);
    
    const handleNavigate = () => {

    //     setLoading(true);
    // setTimeout(() => {
    //     navigation.navigate('FindGames');
    //   setLoading(false);
    // }, 2000);
    navigation.navigate('FindGames')
    }
    const handlePrefrences = () => {
        navigation.navigate('CustomizeProfile');
    }
    
  return (
    
    <View style={styles.MainContainer}>
        <ScrollView style={styles.scrollEdit}  backgroundColor={'white'}>
        <View style={styles.rowContainer}>
        <StatusBar backgroundColor={'white'}  barStyle="dark-content" />
        
    
     <View style={styles.ShoeContainer}>
                    <View style={styles.row}>
                        <View style={styles.ShoeCon}>
                        <TouchableOpacity onPress={()=> navigation.navigate('ReservaFeild')}>
                            <View style={styles.imageContainerBorder}>
                               
                            <Image source={require('../../assets/reserveFeild.jpg')} style={{ width: 150, height: 130,objectFit:'contain',marginTop:5  }} />
                            
                            </View>
                            </TouchableOpacity>
                            <Text style={styles.textPoints} >Reserva una cancha</Text>
                        </View>
                        <View style={styles.ShoeCon}>
                        <TouchableOpacity onPress={()=> navigation.navigate('EncuentraFeild')}>
                        <View style={styles.imageContainerBorder}>
                            <Image source={require('../../assets/findMatch.jpg')} style={{ width: 150, height: 130,objectFit:'contain',marginBottom:5 }} /></View>
                            <Text style={styles.textPoints} >Encuentra un partido</Text>
                            </TouchableOpacity>
                        </View>
                     
                    </View>

                </View>
                <Text style={styles.paragraphsHeading}>
                Partidos ocurriendo cerca de ti
     </Text>
     </View>
     <View ><VerticalSlider/></View>
<View style={styles.buttonContainer}>
    <ButtonEditDashboard Link={handlePrefrences} TextButton="Ajusta tus preferencia s" FontName="football-outline"/>
    <CheckPlayer NameFont="signal-cellular-outline" TextButton="Consultar la tabla de clasificación de jugadores" />
    <CheckPlayer NameFont="signal-cellular-outline" TextButton="Check Team Leaderboard" />
   
    </View>

   
     
                </ScrollView>

                
                <View style={styles.nextButton}>
                    <Button  text="Comenzar un partido" Link={handleNavigate} />
                </View>
    </View>
  
  )
}
const styles = StyleSheet.create({
   
    scrollcontainer:{
        flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight:5
    },

    row: {
        flexDirection: 'row', // Arrange points and text horizontally
        alignItems: 'center', // Center content vertically
        justifyContent:'space-between'
    },
    imageContainerBorder:{
        borderWidth:1,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:18,
        borderColor:'rgba(0, 0, 0, 0.25)',
    //    marginLeft:5,
    //    marginRight:8,
       padding:5
        
    },
    textPoints: {
        fontSize: 15,
        lineHeight: 24,
        color: '#000',
        marginTop: 10,
        fontFamily: Fonts.BOLD,
        marginLeft:2
    },
    ShoeCon: {
        textAlign: 'center',
        justifyContent: 'center',
             paddingLeft:12,
    paddingRight:12,
        
    },
    ShoeContainer: {
        marginTop: 20,
            },
    MainContainer:{
        backgroundColor:'white',
        // flexGrow: 1,
   height:"100%"

       
    },
    buttonContainer:{
        marginTop:30,
        paddingLeft: 15,
        paddingRight:15,
       margin:0,
       padding:0
    },
    paragraphs: {
        fontSize:18,
        color:'black',
        letterSpacing:0.1,
    //   width:'auto',
      lineHeight: 36,
      fontFamily:Fonts.MEDIUM,
      paddingLeft:15,
      paddingRight:10
      },
      nextButton: {
        // position: 'absolute',
        // bottom: -20,
        marginBottom:20,
        paddingLeft:15,
        paddingRight:15,
        backgroundColor:'white'
    },
    paragraphsHeading:{
        fontSize:20,
        color:'black',
        letterSpacing:0.3,
      lineHeight: 36,
      fontFamily:Fonts.MEDIUM,
      paddingLeft:15,
      paddingRight:10,
      marginTop:20,
    }
})

export default Dashboard