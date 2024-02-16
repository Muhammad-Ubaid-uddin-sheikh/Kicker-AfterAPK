import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
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
import Setting from '../screens/setting/Setting'
import { useNavigation } from '@react-navigation/native';
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
import CourtOwnerSetting from '../screens/courtScreenDashboard/courteditprofile/Courteditprofile'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Profile from '../screens/setting/Profile'
import GameStart from '../screens/gamestartselleted/Gamestartselleted'
import StartAGame from '../screens/gamestartselleted/StartaGame'
import StartATeam from '../screens/gamestartselleted/StartAGameTeam'
import CourtDetails from '../screens/courtScreenDashboard/courtAddFolder/CourtDetails'
import ImagesAdd from '../screens/courtScreenDashboard/courtAddFolder/ImagesAdd'
import SoccerSelect from '../screens/courtScreenDashboard/courtAddFolder/SoccerSelect'
import Display from '../screens/courtScreenDashboard/courtAddFolder/Display'
import ParticularCourtGround from '../screens/courtScreenDashboard/courtInnerScreen/particularCourtSreen/ParticularCourtSreen'
const API_URL = 'https://kickers-backend-5e360941484b.herokuapp.com/api/player/getProfile';

const AppNavigator = () => {
  // const userData = useSelector(state => state.user);
  const [userData, setUserData] = useState(null);
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchDataAndStore = async () => {
      try {
        const token = await AsyncStorage.getItem('accessToken');

        if (token) {
          const response = await fetch(API_URL, {
            headers: {
              Authorization: `Bearer ${token}`,

            },
          });

          if (response.ok) {
            const data = await response.json();
            setUserData(data.data); 
            setName(data.data.name);
          
          } 
          else {
            console.error('Error fetching user data:', response.statusText);
          }
        }
  
      } catch (error) {
        console.error('Error fetching and storing user data:', error);
      }
    };
    fetchDataAndStore();
    const intervalId = setInterval(() => {
      fetchDataAndStore();
    }, 1000);
  
    // Clear the interval on component unmount to avoid memory leaks
    return () => clearInterval(intervalId);
  }, []);

  


  
  const Stack = createStackNavigator();
const navigation= useNavigation()
  const handleNavigate = () => {
    navigation.navigate('Setting');
}


  return (
    <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{
      // headerShown: false,
      cardStyle: { backgroundColor: 'white' }, // Set background color if needed
      cardStyleInterpolator: ({ current, layouts }) => {
        return {
          cardStyle: {
            transform: [
              {
                translateX: current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [layouts.screen.width, 0],
                }),
              },
            ],
          },
        };
      },}}
      >
    
    <Stack.Screen name="CreditCard" component={CreditCardScreen} />
    
      <Stack.Screen options={{ headerShown: false }} name="SplashScreen" component={SplashScreen} />
      <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
      <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen} />
      <Stack.Screen options={{ headerShown: false }} name="CourtLogin" component={CourtLogin} />
      <Stack.Screen options={{ headerShown: false }} name="SignupScreen" component={SignupScreen} />
      <Stack.Screen options={{ headerShown: false }} name="CourtSingup" component={CourtSingup} />


      <Stack.Screen options={{ headerShown: false }} name="Display" component={Display} />

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
      <Stack.Screen options={{ 
        headerShown: false
      }}  name="Dashboard" component={Dashboard} />
      {/* <Stack.Screen options={{
        headerLeft: null,
        headerRight: () => (
          <View style={{flexDirection:'row',gap:-10}}>
          <TouchableOpacity onPress={()=> navigation.navigate('Dashboard')}>
            <View style={styles.headerRight}>
            <Image source={require('../assets/Vector.png')} style={{ width: 20, height: 28,objectFit:'contain',marginRight: 18  }} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.headerRight}>
            <Image source={require('../assets/message.png')} style={{ width: 25, height: 25,objectFit:'contain',marginRight: 18  }} />
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
      }} name="FindGames" component={FindGames} /> */}

<Stack.Screen options={{
        headerLeft: null,
     
        headerRight: () => (
          <View style={{flexDirection:'row',gap:-10}}>
          <TouchableOpacity onPress={()=> navigation.navigate('Dashboard')}>
            <View style={styles.headerRight}>
            <Image source={require('../assets/Vector.png')} style={{ width: 20, height: 28,objectFit:'contain',marginRight: 18  }} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.headerRight}>
            <Image source={require('../assets/message.png')} style={{ width: 25, height: 25,objectFit:'contain',marginRight: 18  }} />
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
            <Image source={require('../assets/Vector.png')} style={{ width: 20, height: 28,objectFit:'contain',marginRight: 18  }} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.headerRight}>
            <Image source={require('../assets/message.png')} style={{ width: 25, height: 25,objectFit:'contain',marginRight: 18  }} />
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
      <Stack.Screen options={{ headerShown: false }} name="ParticularCourtGround" component={ParticularCourtGround} />
      <Stack.Screen options={{
        title: 'Ajustes',
        headerTitleAlign: 'start', headerTintColor: '#408639', headerTitleStyle: {
          fontWeight: 400, color: 'rgba(0, 0, 0, 1)', fontSize: 18,fontFamily: Fonts.MEDIUM, marginLeft: -20 // You can customize the style further
        },
      }} name="Setting" component={Setting} />
      <Stack.Screen options={{
        title: 'Ajustes Court',
        headerTitleAlign: 'start', headerTintColor: '#408639', headerTitleStyle: {
          fontWeight: 400, color: 'rgba(0, 0, 0, 1)', fontSize: 18,fontFamily: Fonts.MEDIUM, marginLeft: -20 // You can customize the style further
        },
      }} name="CourtOwnerSetting" component={CourtOwnerSetting} />
<Stack.Screen options={{ headerShown: false }}  name="CourtDashboard" component={CourtDashboard} />
<Stack.Screen options={{
        title: 'Horario',
        headerTitleAlign: 'start', headerTintColor: '#408639', headerTitleStyle: {
          fontWeight: 400, color: 'rgba(0, 0, 0, 1)', fontSize: 18,fontFamily: Fonts.MEDIUM, marginLeft: -20, // You can customize the style further
        },
      }} name="Shadule" component={Shadule} />
      <Stack.Screen options={{headerShown: false,}} name="StartAGame" component={StartAGame} />

<Stack.Screen options={{headerShown:false,}} name="GameStart" component={GameStart} />
<Stack.Screen options={{headerShown:false,}} name="StartATeam" component={StartATeam} />
   
<Stack.Screen options={{ title: 'Detalles de la cancha', headerTitleAlign: 'start', headerTintColor: '#408639', headerTitleStyle: {
          fontWeight: 400, color: 'rgba(0, 0, 0, 1)', fontSize: 18,fontFamily: Fonts.MEDIUM, marginLeft: -20 // You can customize the style further
        },
      }} name="CourtDetails" component={CourtDetails} />
      <Stack.Screen options={{ title: 'Imágenes', headerTitleAlign: 'start', headerTintColor: '#408639', headerTitleStyle: {
          fontWeight: 400, color: 'rgba(0, 0, 0, 1)', fontSize: 18,fontFamily: Fonts.MEDIUM, marginLeft: -20 // You can customize the style further
        },
      }} name="ImagesAdd" component={ImagesAdd} />
       <Stack.Screen options={{ title: 'Detalles del campo', headerTitleAlign: 'start', headerTintColor: '#408639', headerTitleStyle: {
          fontWeight: 400, color: 'rgba(0, 0, 0, 1)', fontSize: 18,fontFamily: Fonts.MEDIUM, marginLeft: -20 // You can customize the style further
        },
      }} name="SoccerSelect" component={SoccerSelect} />
  
    </Stack.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({

});