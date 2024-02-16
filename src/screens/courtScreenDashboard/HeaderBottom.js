import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalendarScreen from './courtInnerScreen/Clender';
import AnalyticsScreen from './courtInnerScreen/Menu';
import SettingsScreen from './courtInnerScreen/Estadisticas';
import { TouchableOpacity, View, } from 'react-native';
import SettingIcon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { Fonts } from '../style';
import IconName from 'react-native-vector-icons/Entypo'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
const API_URL = 'https://kickers-backend-5e360941484b.herokuapp.com/api/court/getProfile';
const Tab = createBottomTabNavigator();

function MyTabs() {
    const navigation= useNavigation()
  const handleNavigate = ()=> {
    navigation.navigate('CourtOwnerSetting');
  }

  const [userData, setUserData] = useState(null);
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchDataAndStore = async () => {
      try {
        const token = await AsyncStorage.getItem('accessTokenCourt');

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
          
          } else {
            console.error('Error fetching user data:', response.statusText);
          }
        }
      } catch (error) {
        console.error('Error fetching and storing user data:', error);
      }
    };
    fetchDataAndStore();
  }, []);

  return (
    <Tab.Navigator 
    screenOptions={({ route }) => ({
      tabBarActiveTintColor: 'rgba(64, 134, 57, 1)',
      tabBarInactiveTintColor: 'black',
      tabBarLabelStyle: {
        fontSize: 12,
        fontFamily: Fonts.MEDIUM,
        marginTop:-5
      }
      })}
      >
      <Tab.Screen options={{
        title:`Hola, ${name}`,
       headerRight: () => (
        <View style={{flexDirection:'row',gap:-10}}>

        <TouchableOpacity onPress={handleNavigate}>
          <View >
          <SettingIcon name="setting" size={23} color='black' style={{ marginRight: 18 }} />
          </View>
        </TouchableOpacity>
        </View>
      ),
          tabBarLabel: 'Calendario',
          tabBarIcon: ({ color, }) => (
            <IconName name="calendar" color={color} size={20} />
          ), headerTitleAlign: 'start', headerTintColor: '#408639', headerTitleStyle: {
            color: 'rgba(0, 0, 0, 1)', fontSize: 27, fontFamily: Fonts.MEDIUM , marginLeft: 0, fontWeight:700// You can customize the style further
           },
        }} name="CalendarScreen" component={CalendarScreen} />
      <Tab.Screen
      options={{title:`Hola, ${name}`,
      headerRight: () => (
       <View style={{flexDirection:'row',gap:-10}}>

       <TouchableOpacity onPress={handleNavigate}>
         <View >
         <SettingIcon name="setting" size={23} color='black' style={{ marginRight: 18 }} />
         </View>
       </TouchableOpacity>
       </View>
     ),
         tabBarLabel: 'Menú',
         tabBarIcon: ({ color, }) => (
           <IconName name="menu" color={color} size={20} />
         ), headerTitleAlign: 'start', headerTintColor: '#408639', headerTitleStyle: {
           color: 'rgba(0, 0, 0, 1)', fontSize: 27, fontFamily: Fonts.MEDIUM , marginLeft: 0, fontWeight:700// You can customize the style further
          },
       }} name="AnalyticsScreen" component={AnalyticsScreen} />
      <Tab.Screen 
      options={{title:'Estadísticas',
      headerRight: () => (
       <View style={{flexDirection:'row',gap:-10}}>

       <TouchableOpacity onPress={handleNavigate}>
         <View >
         <SettingIcon name="setting" size={23} color='black' style={{ marginRight: 18 }} />
         </View>
       </TouchableOpacity>
       </View>
     ),
         tabBarLabel: 'Estadísticas',
         tabBarIcon: ({ color, }) => (
           <IconName name="bar-graph" color={color} size={20} />
         ), headerTitleAlign: 'start', headerTintColor: '#408639', headerTitleStyle: {
           color: 'rgba(0, 0, 0, 1)', fontSize: 27, fontFamily: Fonts.MEDIUM , marginLeft: 0, fontWeight:700// You can customize the style further
          },
       }} name="SettingsScreen" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
export default MyTabs
