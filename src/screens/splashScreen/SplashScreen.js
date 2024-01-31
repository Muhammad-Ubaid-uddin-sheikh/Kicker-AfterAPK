import React, { useEffect } from 'react'
import { Image, StatusBar, StyleSheet, View ,ImageBackground} from 'react-native'

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home')
        }, 3000)
    }, [])
    return (
       
            <ImageBackground
      source={require('../../assets/SplashBackground.png')}
      style={styles.backgroundImage}
    > 
      <StatusBar barStyle="light-content" translucent={true} backgroundColor={'transparent'}  />
    <View style={styles.container}>
            {/* <StatusBar backgroundColor={'#408639'} /> */}
            <Image style={styles.logo} source={require('../../assets/launch_screen.png')} />
        
        </View>
        </ImageBackground>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#408639',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 500,
        height: 400,
        objectFit: 'cover'

    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
      },
});