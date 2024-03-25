
import React, { useEffect, useRef, useState } from 'react'
import { View, StyleSheet, StatusBar, Text, Image,Alert, Share, Platform } from 'react-native'
import { Fonts } from '../../style'
import ButtonslipAndcencel from '../../../components/ButtonslipAndcencel'
import ViewShot from 'react-native-view-shot';
import RNFS from 'react-native-fs';
import { captureRef } from 'react-native-view-shot';
import { useNavigation } from '@react-navigation/native';
const CustomizeProfile = ({ route}) => {
const navigation = useNavigation()
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
  };
    const {Datarespo,totalAmount,Item} = route.params   
   console.log('data',Item.images[0])
    const courtImage = Datarespo.data.courtImage;
const [firstTime, secondTime] = Datarespo.data.timingRange
const [firstHour, firstMinute,] = firstTime.split(' ');
// const [secondHour, secondMinute,] = secondTime.split(' ');

const firstHourNumber = parseInt(firstHour, 10); 
const viewShotRef = useRef(null); // Correct reference to useRef

    const takeScreenshotAndSave = async () => {
        try {
            const uri = await captureRef(viewShotRef, { // Updated to use viewShotRef
                format: 'png', // You can choose other formats like png
                quality: 0.8,
                backgroundColor: 'white', // Image quality (0 to 1)
            });

            const directoryPath = RNFS.PicturesDirectoryPath;
            const fileName = `screenshot_${Date.now()}.png`;
            const filePath = `${directoryPath}/${fileName}`;
            await RNFS.copyFile(uri, filePath);

            Alert.alert('Success', 'Screenshot saved to gallery!');
              navigation.navigate('DashboardMain')
        } catch (error) {
            console.error('Error saving screenshot:', error);
            Alert.alert('Error', 'Failed to save screenshot.');
        }
    };
    return (
        <View style={styles.container}>
            {/* <StatusBar backgroundColor={'white'} barStyle="dark-content" /> */}
            <ViewShot style={{backgroundColor:'white'}} ref={viewShotRef} options={{  quality: 1 }}>
           
            <View style={styles.mainContainerSlip}>
                 <Image
                        source={{ uri: courtImage.length > 0 ? Item.images[0] : 'https://global-uploads.webflow.com/5ca5fe687e34be0992df1fbe/61b5911c9d37d0449acee390_soccer-ball-on-grass-in-corner-kick-position-on-so-2021-08-29-10-46-54-utc-min.jpg' }}
                        style={styles.backgroundImage}
                    />
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={styles.GroundName}> {Datarespo.data.courtName}</Text>
                <Text style={[styles.headingTitle,{paddingTop:10,paddingLeft:40}]}>Rs: {totalAmount}.00</Text>
                    </View>
              
                <View style={styles.rowGroundDetails}>
                    <View>
                        <Text style={styles.profileHeading}>Nombre</Text>
                        <Text style={styles.headingTitle}>{Datarespo.data.bookedByName}</Text>
                    </View>
                    <View>
                        <Text style={styles.profileHeading}>Fecha 
                        
                        </Text>
                        <Text style={styles.headingTitle}>{Datarespo.data?.date ? formatDate(Datarespo.data.date) : 'N/A'}</Text>
                    </View>

                </View>
                <View style={styles.rowGroundDetails}>
                    <View>
                        <Text style={styles.profileHeading}>Hora de inicio</Text>
                        <Text style={styles.headingTitle}>{firstHour} {firstMinute}  </Text>
                    </View>
                    <View>
                        <Text style={styles.profileHeading}>Hora de finalización</Text>
                        {/* <Text style={styles.headingTitle}>{secondHour} {secondMinute} </Text> */}
                    </View>

                </View>
                <View style={styles.rowGroundDetails}>
                    <View>
                        <Text style={styles.profileHeading}>Cancha</Text>
                        <Text style={styles.headingTitle}>{Datarespo.data.fieldName} </Text>
                    </View>
                    <View>
                        <Text style={styles.profileHeading}>Pago</Text>
                        <Text style={styles.headingTitle}>{Datarespo.data.paymentStatus} </Text>
                    </View>

                </View>
            
            </View>
            </ViewShot>
            <View style={styles.nextButton}>
                <View style={{marginBottom:10}}> 
                <ButtonslipAndcencel ColorIcon='white'IconColor="#408639" ColorText="#408639" IconName="share" text="Compartir detalles" Link={()=>navigation.navigate('Discovery')} />
                </View>
                
                <ButtonslipAndcencel   IconName="save-alt" text="Guardar recibo" Link={takeScreenshotAndSave}  />
                
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    nextButton: {
        position:'absolute',
        bottom: 25,
        width:340
    },
    headingTitle: {
        fontFamily: Fonts.MEDIUM,
        color: "#212121",
        letterSpacing: 0.2,
        fontSize: 16,
        paddingLeft: 3,
        paddingTop:5,
        width:150,
    },
    profileHeading: {
        fontFamily: Fonts.REGULAR,
        color: "#787878",
        letterSpacing: 0.2,
        fontSize: 14.5,
        paddingTop: 10,
        paddingLeft:3,
        width:150,
        flexWrap: 'wrap',
    },
    mainContainerSlip: {
        backgroundColor: 'rgba(64, 134, 57, 0.05)',
        // box-shadow: '0 4 60px 0px rgba(4, 6, 15, 0.05)'
        padding: 15,
        borderRadius: 16,
        borderColor: 'rgba(0, 0, 0, 0.25)',
        borderWidth: 0.5,
    },

    rowGroundDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10
    },
    /* Card/Shadow 2 */
    GroundName: {
        fontFamily: Fonts.MEDIUM,
        color: "#212121",
        letterSpacing: 0.2,
        fontSize: 19,
        paddingTop: 10,
        paddingLeft: 5,
    },
    backgroundImage: {
        width: 320,
        height: 200,
        objectFit: 'cover',
        borderRadius: 16,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',

    },



});

export default CustomizeProfile