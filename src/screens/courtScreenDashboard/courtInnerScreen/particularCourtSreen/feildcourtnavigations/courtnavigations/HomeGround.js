import React from 'react';
import { Text, View, StatusBar, StyleSheet, Image, ScrollView, } from 'react-native'

import Gallery from './GalaryScooer';
import GalarySecond from './GalaryCourt'
import { Fonts } from '../../../../../style';
const Dashboard = ({ navigation }) => {
   

    const scheduleTimings = [
        { day: 'Una hora', timing: '$49.00' },
        { day: 'Dos horas', timing: '$75.00' },
        { day: 'Tres horas', timing: '$120.00' },
        

       
      ];
    return (

        <View style={styles.MainContainer}>
            <ScrollView style={styles.scrollEdit} backgroundColor={'white'}>
                <View style={styles.rowContainer}>
                    <StatusBar backgroundColor={'white'} barStyle="dark-content" />
                    <Text style={styles.paragraphs}>
                    Canchas disponibles
                    </Text>



                </View>

<View style={styles.mainContainerShedule}>
<Gallery/>
<View >
                      <Text style={styles.paragraphs}>
                    Galería
                    </Text>

                </View>
                <GalarySecond/>
</View>
<Text style={[styles.paragraphs,{paddingTop:0,marginTop:-20}]}>
Precios
                    </Text>
<View style={styles.mainContainerSheduleTiming}>
    
{scheduleTimings.map((schedule, index) => (
        <View key={index} style={styles.timingContainer}>
          <Text style={styles.day}>{schedule.day}</Text>
          <Text style={styles.timing}>{schedule.timing}</Text>
        </View>
      ))}
</View>

            </ScrollView>
            
        </View>

    )
}
const styles = StyleSheet.create({
    mainContainerSheduleTiming:{
      paddingLeft:15,
      paddingRight:15,
      paddingBottom:10
   
    },
    timingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
      },
      day: {
        fontSize: 16,
        color:'#6F6F6F',
        fontFamily:Fonts.MEDIUM,
        letterSpacing:0.2
      },
      timing: {
        fontSize: 13,
        color:'#000',
        fontFamily:Fonts.MEDIUM,
        letterSpacing:0.2
      },
    scrollcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 5
    },

    row: {
        flexDirection: 'row', // Arrange points and text horizontally
        alignItems: 'center', // Center content vertically
        justifyContent: 'space-between'
    },


    MainContainer: {
        backgroundColor: 'white',
        // flexGrow: 1,
        height: "100%"


    },

    paragraphs: {
        fontSize: 18,
        color: 'black',
        letterSpacing: 0.1,
        //   width:'auto',
        lineHeight: 36,
        fontFamily: Fonts.BOLD,
        paddingLeft: 15,
        paddingRight: 10,
        paddingTop: 10
    },
   
    timingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
      },
      day: {
        fontSize: 16,
        color:'#6F6F6F',
        fontFamily:Fonts.MEDIUM,
        letterSpacing:0.2
      },
      timing: {
        fontSize: 13,
        color:'#000',
        fontFamily:Fonts.MEDIUM,
        letterSpacing:0.2
      },

})

export default Dashboard