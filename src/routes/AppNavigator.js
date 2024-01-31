import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Home from '../screens/home/Home';
import SplashScreen from '../screens/splashScreen/SplashScreen';
import LoginScreen from '../screens/loginScreen/LoginScreen';
import SignupScreen from '../screens/signupScreen/SignUpScreen';
import CustomizeProfile from '../screens/customiseProfile/CustomiseProfile';
import CustomizeProfileFoot from '../screens/customiseProfile/CustomizeProfileFoot';
import CustomizeProfilePrefferd from '../screens/customiseProfile/CustomizeProfilePrefferd';
import CustomizeProfileNationlity from '../screens/customiseProfile/CustomizeProfileNationlity';
import Dashboard from '../screens/dashboard/Dashboard';
import FindGames from '../screens/findGames/FindGames';
import SettingIcon from 'react-native-vector-icons/AntDesign';
import ParticularGroundScreen from '../screens/particularGroundScreen/ParticularGroundScreen';
import Bell from 'react-native-vector-icons/FontAwesome'
import Chat from 'react-native-vector-icons/MaterialCommunityIcons'
import Setting from '../screens/setting/Setting'
import { useNavigation } from '@react-navigation/native';
import Homeicon from 'react-native-vector-icons/SimpleLineIcons';
import CourtLogin from '../screens/courtLoginSinup/CourtLogin'
import CourtSingup from '../screens/courtLoginSinup/CourtSingup'
import CourtDashboard from '../screens/courtScreenDashboard/CourtScreenDashboard'
import Shadule from '../screens/courtScreenDashboard/ShaduleRevisa'
import EditProfile from '../screens/setting/EditarPerfil'
import Pago from '../screens/setting/Pago'
import Notification from '../screens/setting/Notification'
import Privacy from '../screens/setting/Privacy'
import Security from '../screens/setting/Security'
import { Fonts } from '../screens/style';
import CambiarContrasena from '../screens/setting/CambiarContrasena';
import CreditCardScreen from '../screens/setting/card/AddCardScree';
import ReservaFeild from '../screens/reservaFeild/ReservaFeild'
import EncuentraFeild from '../screens/encuentraFeild/EncuentraFeild'
import Payment from '../screens/particularGroundScreen/feildNavigations/Payment'
import SlipPage from '../screens/particularGroundScreen/feildNavigations/SlipPage'
import { useSelector } from 'react-redux';
import Profile from '../screens/setting/Profile'
const AppNavigator = () => {
  const userData = useSelector(state => state.user);


  
  const Stack = createStackNavigator();
const navigation= useNavigation()
  const handleNavigate = () => {
    navigation.navigate('Setting');
}
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };


  return (
    <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, headerStyle: {
      backgroundColor: 'white',shadowColor: 'white',} }} >
    
    <Stack.Screen name="CreditCard" component={CreditCardScreen} />
    
      <Stack.Screen options={{ headerShown: false }} name="SplashScreen" component={SplashScreen} />
      <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
      <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen} />
      <Stack.Screen options={{ headerShown: false }} name="CourtLogin" component={CourtLogin} />
      <Stack.Screen options={{ headerShown: false }} name="SignupScreen" component={SignupScreen} />
      <Stack.Screen options={{ headerShown: false }} name="CourtSingup" component={CourtSingup} />
      <Stack.Screen options={{ title: 'Recibo', headerTitleAlign: 'start', headerTintColor: '#408639', headerTitleStyle: {
          fontWeight: 400, color: 'rgba(0, 0, 0, 1)', fontSize: 18,fontFamily: Fonts.MEDIUM, marginLeft: -20 // You can customize the style further
        },
      }} name="SlipPage" component={SlipPage} />


      <Stack.Screen options={{ title: 'Pago', headerTitleAlign: 'start', headerTintColor: '#408639', headerTitleStyle: {
          fontWeight: 400, color: 'rgba(0, 0, 0, 1)', fontSize: 18,fontFamily: Fonts.MEDIUM, marginLeft: -20 // You can customize the style further
        },
      }} name="Paymnet" component={Payment} />
      
      <Stack.Screen options={{ title: 'Pago', headerTitleAlign: 'start', headerTintColor: '#408639', headerTitleStyle: {
          fontWeight: 400, color: 'rgba(0, 0, 0, 1)', fontSize: 18,fontFamily: Fonts.MEDIUM, marginLeft: -20 // You can customize the style further
        },
      }} name="Pago" component={Pago} />
<Stack.Screen options={{ title: 'Notificacion es', headerTitleAlign: 'start', headerTintColor: '#408639', headerTitleStyle: {
          fontWeight: 400, color: 'rgba(0, 0, 0, 1)', fontSize: 18,fontFamily:Fonts.MEDIUM, marginLeft: -20 // You can customize the style further
        },
      }} name="Notification" component={Notification} />
      <Stack.Screen options={{ title: 'Privacidad', headerTitleAlign: 'start', headerTintColor: '#408639', headerTitleStyle: {
          fontWeight: 400, color: 'rgba(0, 0, 0, 1)', fontSize: 18,fontFamily: Fonts.MEDIUM, marginLeft: -20 // You can customize the style further
        },
      }} name="Privacy" component={Privacy } />
      <Stack.Screen options={{ title: 'Seguridad', headerTitleAlign: 'start', headerTintColor: '#408639', headerTitleStyle: {
          fontWeight: 400, color: 'rgba(0, 0, 0, 1)', fontSize: 18,fontFamily: Fonts.MEDIUM, marginLeft: -20 // You can customize the style further
        },
      }} name="Security" component={Security} />
      <Stack.Screen options={{ title: 'Editar perfil', headerTitleAlign: 'start', headerTintColor: '#408639', headerTitleStyle: {
          fontWeight: 400, color: 'rgba(0, 0, 0, 1)', fontSize: 18,fontFamily: Fonts.MEDIUM, marginLeft: -20 // You can customize the style further
        },
      }} name="EditProfile" component={EditProfile} />

<Stack.Screen options={{ title: 'perfil', headerTitleAlign: 'start', headerTintColor: '#408639', headerTitleStyle: {
          fontWeight: 400, color: 'rgba(0, 0, 0, 1)', fontSize: 18,fontFamily: Fonts.MEDIUM, marginLeft: -20 // You can customize the style further
        },
      }} name="Profile" component={Profile} />
<Stack.Screen options={{ title: 'CambiarContraseña', headerTitleAlign: 'start', headerTintColor: '#408639', headerTitleStyle: {
          fontWeight: 400, color: 'rgba(0, 0, 0, 1)', fontSize: 18,fontFamily: Fonts.MEDIUM, marginLeft: -20 // You can customize the style further
        },
      }} name="CambiarContrasena" component={CambiarContrasena} />
      <Stack.Screen options={{
        title: 'Perfil del jugador',

        headerTitleAlign: 'start', headerTintColor: '#408639', headerTitleStyle: {
          fontWeight: 400, color: 'rgba(0, 0, 0, 1)', fontSize: 18,fontFamily: Fonts.MEDIUM, marginLeft: -20 // You can customize the style further
        },
      }} name="CustomizeProfile" component={CustomizeProfile} />
      <Stack.Screen options={{
        title: 'Perfil del jugador',
        headerTitleAlign: 'start', headerTintColor: '#408639', headerTitleStyle: {
          fontWeight: 400, color: 'rgba(0, 0, 0, 1)', fontSize: 18,fontFamily: Fonts.MEDIUM, marginLeft: -20 // You can customize the style further
        },
      }} name="CustomizeProfileFoot" component={CustomizeProfileFoot} />
      <Stack.Screen options={{
        title: 'Perfil del jugador',
        headerTitleAlign: 'start', headerTintColor: '#408639', headerTitleStyle: {
          fontWeight: 400, color: 'rgba(0, 0, 0, 1)', fontSize: 18,fontFamily: Fonts.MEDIUM, marginLeft: -20 // You can customize the style further
        },
      }} name="CustomizeProfileNationlity" component={CustomizeProfileNationlity} />
      <Stack.Screen options={{
        title: 'Perfil del jugador',
        headerTitleAlign: 'start', headerTintColor: '#408639', headerTitleStyle: {
          fontWeight: 400, color: 'rgba(0, 0, 0, 1)', fontSize: 18,fontFamily: Fonts.MEDIUM, marginLeft: -20 // You can customize the style further
        },
      }} name="CustomizeProfilePrefferd" component={CustomizeProfilePrefferd} />
      <Stack.Screen options={{ headerLeft: null,
      headerRight: () => (
        <View style={{flexDirection:'row',gap:-10}}>
        <TouchableOpacity>
          <View style={styles.headerRight}>
          <Bell name="bell-o" size={23} color='black' style={{ marginRight: 18 }} />  
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.headerRight}>
            <Chat name="message-text-outline" size={23} color='black' style={{ marginRight: 18 }} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNavigate}>
          <View style={styles.headerRight}>
          <SettingIcon name="setting" size={23} color='black' style={{ marginRight: 18 }} />
          </View>
        </TouchableOpacity>
        </View>
      ),
        title: `Hola, ${userData.name}`,
        headerTitleAlign: 'start', headerTintColor: '#408639', headerTitleStyle: {
           color: 'rgba(0, 0, 0, 1)', fontSize: 27,fontFamily: Fonts.BOLD, marginLeft: 0 // You can customize the style further
        },
      }}  name="Dashboard" component={Dashboard} />
      <Stack.Screen options={{
        headerLeft: null,
        headerRight: () => (
          <View style={{flexDirection:'row',gap:-10}}>
          <TouchableOpacity onPress={()=> navigation.navigate('Dashboard')}>
            <View style={styles.headerRight}>
            <Homeicon name="home" size={22} color='black' style={{ marginRight: 18 }} />  
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.headerRight}>
              <Chat name="message-text-outline" size={23} color='black' style={{ marginRight: 18 }} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNavigate}>
            <View style={styles.headerRight}>
            <SettingIcon name="setting" size={23} color='black' style={{ marginRight: 18 }} />
            </View>
          </TouchableOpacity>
          </View>
        ),

        title: 'Comienza un partido',
        headerTintColor: '#408639', headerTitleStyle: {
          color: 'black', fontSize: 20,fontFamily: Fonts.BOLD, letterSpacing:0.1
        },
      }} name="FindGames" component={FindGames} />

<Stack.Screen options={{
        headerLeft: null,
        headerRight: () => (
          <View style={{flexDirection:'row',gap:-10}}>
          <TouchableOpacity onPress={()=> navigation.navigate('Dashboard')}>
            <View style={styles.headerRight}>
            <Homeicon name="home" size={22} color='black' style={{ marginRight: 18 }} />  
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.headerRight}>
              <Chat name="message-text-outline" size={23} color='black' style={{ marginRight: 18 }} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNavigate}>
            <View style={styles.headerRight}>
            <SettingIcon name="setting" size={23} color='black' style={{ marginRight: 18 }} />
            </View>
          </TouchableOpacity>
          </View>
        ),

        title: 'Reserva una cancha',
        headerTintColor: '#408639', headerTitleStyle: {
          color: 'black', fontSize: 20,fontFamily: Fonts.BOLD, letterSpacing:0.1
        },
      }} name="ReservaFeild" component={ReservaFeild} />

<Stack.Screen options={{
        headerLeft: null,
        headerRight: () => (
          <View style={{flexDirection:'row',gap:-10}}>
          <TouchableOpacity onPress={()=> navigation.navigate('Dashboard')}>
            <View style={styles.headerRight}>
            <Homeicon name="home" size={22} color='black' style={{ marginRight: 18 }} />  
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.headerRight}>
              <Chat name="message-text-outline" size={23} color='black' style={{ marginRight: 18 }} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNavigate}>
            <View style={styles.headerRight}>
            <SettingIcon name="setting" size={23} color='black' style={{ marginRight: 18 }} />
            </View>
          </TouchableOpacity>
          </View>
        ),

        title: 'Encuentra un partido',
        headerTintColor: '#408639', headerTitleStyle: {
          color: 'black', fontSize: 20,fontFamily: Fonts.BOLD, letterSpacing:0.1
        },
      }} name="EncuentraFeild" component={EncuentraFeild} />

      <Stack.Screen options={{ headerShown: false }} name="ParticularGroundScreen" component={ParticularGroundScreen} />
      <Stack.Screen options={{
        title: 'Ajustes',
        headerTitleAlign: 'start', headerTintColor: '#408639', headerTitleStyle: {
          fontWeight: 400, color: 'rgba(0, 0, 0, 1)', fontSize: 18,fontFamily: Fonts.MEDIUM, marginLeft: -20 // You can customize the style further
        },
      }} name="Setting" component={Setting} />

<Stack.Screen options={{ headerShown: false }}  name="CourtDashboard" component={CourtDashboard} />
<Stack.Screen options={{
        title: 'Horario',
        headerTitleAlign: 'start', headerTintColor: '#408639', headerTitleStyle: {
          fontWeight: 400, color: 'rgba(0, 0, 0, 1)', fontSize: 18,fontFamily: Fonts.MEDIUM, marginLeft: -20, // You can customize the style further
        },
      }} name="Shadule" component={Shadule} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({

});