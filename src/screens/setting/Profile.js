import React, { useState } from 'react';
import { Text, View, StatusBar, StyleSheet, ScrollView,TouchableOpacity,TextInput} from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay';
import CheckPlayer from '../../components/CustomButton'
import ButtonEditDashboard from '../../components/ButtonEditDashboard'
import ImageEdit from './ImageEdit'
import Modal from 'react-native-modal';
import Button from '../../components/ButtonTransparentBlack';
import { Fonts } from '../style';
import { useSelector } from 'react-redux';
import Checking from './Checking'
const Setting = ({navigation, label }) => {
  const userData = useSelector(state => state.user);
  const [text, setText] = useState('');
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (

        <ScrollView backgroundColor={'white'}>
        <View style={styles.MainContainer}>
            <View style={styles.rowContainer}>
            <StatusBar backgroundColor={'white'} barStyle="dark-content" />
           
            {/* <Text style={styles.paragraphs}>
            What would you like to do today?
         </Text> */}
    
         <View style={styles.ShoeContainer}>
                        <View style={styles.row}>
                        <TouchableOpacity onPress={()=> navigation.navigate('Profile')}>
                            <View style={styles.ShoeCon}>
                            <ImageEdit title="Editar foto"/>
                            </View>
                            </TouchableOpacity>
                            <View style={styles.ShoeConText} >
                                <Text style={styles.textPoints} >{userData.name}</Text>
                                <Text style={styles.paragraph} >{userData.email}</Text>
                                <Text style={styles.paragraph} >Level  3.5</Text>
                            </View>
                            
                        </View>
                        <View style={styles.InputButtonsFeild}>
      <Checking label="hello"/>
      
                        </View>
                    </View>
                   
         </View>
   
        </View>
        </ScrollView>
      )
    }
    const styles = StyleSheet.create({
        loaderText:{
            color:'white',
            fontFamily:Fonts.BOLD
        },
        containerButton:{// Arrange points and text horizontally
            alignItems: 'center', // Center content vertically
            justifyContent:'space-between',
            width:'auto',
            position:'relative',
            flexDirection: 'row',
            gap:10
        },
        mainContent: {
            textAlign: 'center',
        justifyContent: 'center',
      //  width:150,
          },
        ShoeConText:{
            paddingTop:20
        },
       
    
        row: {
            flexDirection: 'row', // Arrange points and text horizontally
            alignItems: 'top', // Center content vertically
            gap: 30,
        },
        textPoints: {
            fontSize: 22,
            lineHeight: 24,
            color: '#000',
            marginTop: 10,
            

        },
        ShoeCon: {
            textAlign: 'center',
            justifyContent: 'center',
            // width:85
        },
        ShoeContainer: {
            marginTop: 5,
                },
        MainContainer:{
            width:'auto',
            backgroundColor:'white',
            flex:1,
            paddingLeft:15,
            paddingRight:15
           
        },
        buttonContainer:{
            marginTop:30
        },
        paragraph: {
            fontSize:15,
            color:'#61646B',
            letterSpacing:0.1,
          width:'auto',

          fontFamily: 'Satoshi-Medium'
          },
          paragraphspoup:{
            fontSize:14,
            color:'#424242',
            letterSpacing:0.1,
            fontFamily: 'Satoshi-Medium',
            paddingTop:18,
            paddingBottom:10,
            textAlign:"left",
            width:300,
          },
          paragraphsHeadingMain:{
            fontSize:20,
            color:'black',
            letterSpacing:0.1,
            fontFamily: 'Satoshi-Medium',
            fontWeight:'bold',
            textAlign:"left",
            width:300,
          },
          nextButton: {
            // position: 'absolute',
            // bottom: -20,
            marginBottom:20
        },
        paragraphsHeading:{
            fontSize:20,
            color:'black',
            letterSpacing:0.3,
          width:'auto',
          lineHeight: 36,
          fontFamily: 'Satoshi-Medium',
          marginLeft:2,
          marginTop:20
        },  
        inputGroup: {
            margin: 10,
            maxWidth: 190,
            position: 'relative',
          },
          input: {
            fontSize: 16,
            padding: 8,
            outline: 'none',
            borderWidth: 2,
            borderColor: 'rgb(200, 200, 200)',
            backgroundColor: 'transparent',
            borderRadius: 20,
            width: '100%',
          },
          label: {
            fontSize: 16,
            position: 'absolute',
            left: 0,
            padding: 8,
            marginLeft: 5,
            pointerEvents: 'none',
            transition: 'all 0.3s ease',
            color: 'rgb(100, 100, 100)',
          },
    })


export default Setting
