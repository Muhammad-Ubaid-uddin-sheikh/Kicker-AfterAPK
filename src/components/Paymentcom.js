
import React, { useState } from 'react'
import { View, StyleSheet, Text,  StatusBar, ScrollView,} from 'react-native'
import ButtonPaymnet from './ButtonPaymnet';
import Paypal from '../assets/paypal.png'
import Google from '../assets/google.png'
import Apple from '../assets/apple.png'
import { Fonts } from '../screens/style';
import ButtonImg from './ButtonImage'
import {WebView} from 'react-native-webview';
const CustomizeProfile = ({Link,SecondIcon,text,center,FirstIcon,Paymnet}) => {

    return (
        <View style={styles.container}>
            {/* <StatusBar backgroundColor={'white'}  barStyle="dark-content" /> */}
           
            <View style={styles.MainContainer}>
            <Text style={styles.Heading}>Por favor, selecciona un método de Retiro</Text>
                
                    {/* <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={styles.containerButton}> */}
        {/* <ButtonImg TextButton="Paypal" ImageName={Paypal} />
        <ButtonImg TextButton="Google Pay" ImageName={Google} />
       <ButtonImg TextButton="Apple Pay" ImageName={Apple} /> */}
 
       {/* </ScrollView> */}
       {/* <View > */}
      <WebView source={{ uri: Paymnet }} />
      {/* </View> */}
            </View>
                <View style={styles.nextButton}>
                
                <ButtonPaymnet SecondIcon={SecondIcon} Link={Link}  Center={center}  text={text} FirstIcon={FirstIcon}  />
                </View>
        </View>
        
    )
}
const styles = StyleSheet.create({
  courtName:{
width:'100%'
  },
  containerButton:{
    marginTop:30,
    padding:0
  },
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
      //   marginRight:10,
      //  marginLeft:10,
        
    }, 
 Heading: {
                  fontSize:20,
                  color:'#212121',
                  letterSpacing:0.1,
                fontFamily: Fonts.BOLD
                },
            
    
    nextButton: {
        position: 'absolute',
        bottom: 25,
        width:340
    },
   
  
   
});

export default CustomizeProfile