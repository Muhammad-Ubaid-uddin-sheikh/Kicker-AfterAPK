
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Image, } from 'react-native';
import { Fonts } from '../style';
import { ScrollView } from 'react-native-gesture-handler';
const App = ({ navigation }) => {

    return (
        // <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={{ backgroundColor: 'white' }}>
        //     <StatusBar backgroundColor={'white'} barStyle="light-content" />
            <View style={styles.container}>

                <Image style={styles.imageStyle} source={require('../../assets/splashSec.png')} width={20} height={50} />
                <StatusBar translucent={true} backgroundColor={'transparent'} barStyle="light-content"  />
                <View style={styles.Widthcontainer}>

                    <Text style={styles.heading}>Disfruta al máximo el mundo del fútbol cerca de ti</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginScreen')}>
                        <Text style={styles.buttonText}>Inicia sesión</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: 'white', }]} onPress={() => navigation.navigate('SignupScreen')} >
                        <Text style={[styles.buttonText, { color: 'black' }]}>Registrate</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.linkText}  >
                        <Text style={styles.informationText}>¿Eres propietario de una cancha? <Text onPress={() => navigation.navigate('CourtLogin')} style={styles.TextLink}>Haz click aquí</Text> </Text>
                    </TouchableOpacity>

                </View>
            </View>
        // </ScrollView>
    )
};

const styles = StyleSheet.create({
    imageStyle:{
        flex: 1,
    width: '100%',
    resizeMode: 'cover',

    },
    linkText: {
        backgroundColor: 'white'
    },
    TextLink: {
        fontSize: 13,
        lineHeight: 24,
        color: '#408639',
        fontWeight: '500',
        fontFamily: 'Satoshi-Medium'
    },
    informationText: {
        fontSize: 12,
        lineHeight: 24,
        color: '#61646B',
        textAlign: 'center',
        fontFamily: 'Satoshi-Medium'
    },
    Widthcontainer: {
        width: '100%',
        backgroundColor: 'white',
        paddingLeft: 20,
        paddingRight: 20
    },
    container: {
        flex: 1,
        // position: 'relative',
        // marginTop: 0,
        // padding: 0,
        // backgroundColor: 'white',
        // alignItems: 'center'

    },
    heading: {
        fontSize: 23,
        paddingBottom: 20,
        color: '#000',
        fontFamily: Fonts.SAMIBOLD,
        lineHeight: 36,
        paddingTop: 10
    },
    button: {
        backgroundColor: '#212121',
        padding: 15,
        marginTop: 15,
        borderRadius: 10,
       
        borderColor: '#212121',
        borderWidth: 0.5, // Set the border width
       fontFamily: 'Satoshi-Regular',

    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
        fontFamily: 'Satoshi-Medium'
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 0,
    },
    backIcon: {
        width: '100%',
        height: 30,
        marginLeft: 10
    },
});

export default App;
