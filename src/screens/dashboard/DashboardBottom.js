import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity, Image } from 'react-native';
import SettingIcon from 'react-native-vector-icons/AntDesign';
import Bell from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DashboardMain from './DashboardMain';
import AnalyticsScreen from '../followPage/FollowPage';
import Profile from '../setting/Profile';
import FindGames from '../findGames/FindGames'
import { Fonts } from '../style';
import { useNavigation } from '@react-navigation/native';

const API_URL = 'https://kickers-backend-5e360941484b.herokuapp.com/api/player/getProfile';

const Tab = createBottomTabNavigator();

function MyTabs() {
  const [name, setName] = useState('');
 
const navigation= useNavigation()
    const fetchDataAndStore = async () => {
      try {
        const token = await AsyncStorage.getItem('accessToken');

        if (token) {
          const response = await fetch(API_URL, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
           
          });
          // console.warn(token)
          if (response.ok) {
            const data = await response.json();
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
  useEffect(() => {
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
        },
        headerTitleStyle: {
            fontSize: 25, // Set the desired font size for the header text
            fontFamily: Fonts.BOLD,
            marginLeft: 0,
            
          },
      })}
    >
      <Tab.Screen
        name="DashboardMain"
        component={DashboardMain}
        options={{
          headerStyle: {
            // height:40,
            backgroundColor: 'white', // Change the background color
            shadowColor: 'white', // Box shadow color
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0, // Box shadow opacity
            shadowRadius: 0, // Box shadow blur radius
            elevation: 0,
            borderTopColor: 'white', // For Android
            borderBottomColor: 'white', // Border color
            borderBottomWidth: 0, // Border width
          },
          title: `Hola, ${name}`,
        
          headerRight: () => (
            <View style={{ flexDirection: 'row', gap: -10 }}>
              <TouchableOpacity>
                <Bell name="bell-o" size={23} color="black" style={{ marginRight: 18 }} />
              </TouchableOpacity>
              <TouchableOpacity>
              <Image source={require('../../assets/message.png')} style={{ width: 25, height: 25,objectFit:'contain',marginRight: 18  }} />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> navigation.navigate('Setting')}>
                <SettingIcon name="setting" size={23} color="black" style={{ marginRight: 18 }} />
              </TouchableOpacity>
            </View>
          ),
          tabBarLabel: 'Hogar',
          tabBarIcon: ({ color }) => 
          <Entypo name="home" color={color} size={30} />,
        }}
      />
<Tab.Screen
        name="Discovery"
        component={FindGames}
        options={{
          title:'Comienza un partido',
          headerStyle: {
            backgroundColor: 'white', // Change the background color
            shadowColor: 'white', // Box shadow color
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0, // Box shadow opacity
            shadowRadius: 0,
            borderTopColor: 'white', // Box shadow blur radius
            elevation: 0, // For Android
            borderBottomColor: 'white', // Border color
            borderBottomWidth: 0, // Border width
          },
         
        
          headerRight: () => (
            <View style={{ flexDirection: 'row', gap: -10 }}>
              <TouchableOpacity>
                <Bell name="bell-o" size={23} color="black" style={{ marginRight: 18 }} />
              </TouchableOpacity>
              <TouchableOpacity>
              <Image source={require('../../assets/message.png')} style={{ width: 25, height: 25,objectFit:'contain',marginRight: 18  }} />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> navigation.navigate('Setting')}>
                <SettingIcon name="setting" size={23} color="black" style={{ marginRight: 18 }} />
              </TouchableOpacity>
            </View>
          ),
          tabBarLabel: 'Discovery',
          tabBarIcon: ({ color }) => <Ionicons name="football-outline" color={color} size={28} />,
        }}
      />

      <Tab.Screen
        name="AnalyticsScreen"
        component={AnalyticsScreen}
        options={{
          headerStyle: {
            backgroundColor: 'white', // Change the background color
            shadowColor: 'white', // Box shadow color
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0, // Box shadow opacity
            shadowRadius: 0, // Box shadow blur radius
            elevation: 0,
            borderTopColor: 'white', // For Android
            borderBottomColor: 'white', // Border color
            borderBottomWidth: 0, // Border width
          },
          title: `Hola, ${name}`,
          headerRight: () => (
            <View style={{ flexDirection: 'row', gap: -10 }}>
              <TouchableOpacity>
                <Bell name="bell-o" size={23} color="black" style={{ marginRight: 18 }} />
              </TouchableOpacity>
              <TouchableOpacity>
              <Image source={require('../../assets/message.png')} style={{ width: 25, height: 25,objectFit:'contain',marginRight: 18  }} />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> navigation.navigate('Setting')}>
                <SettingIcon name="setting" size={23} color="black" style={{ marginRight: 18 }} />
              </TouchableOpacity>
            </View>
          ),
          tabBarLabel: 'Ranking',
          tabBarIcon: ({ color }) => <Ionicons name="trophy-sharp" color={color} size={28} />,
        }}
      />
      
      <Tab.Screen
        name="PlayerProfile"
        component={Profile}
        options={{
          title: 'Perfil',
          headerStyle: {
            backgroundColor: 'white', // Change the background color
            shadowColor: 'white', // Box shadow color
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0, // Box shadow opacity
            shadowRadius: 0, // Box shadow blur radius
            elevation: 0, // For Android
            borderBottomColor: 'white',
            borderTopColor: 'white', // Border color
            borderBottomWidth: 0, // Border width
          },
          headerRight: () => (
            <View style={{ flexDirection: 'row', gap: -10 }}>
              <TouchableOpacity onPress={()=> navigation.navigate('Setting')}>
                <SettingIcon name="setting" size={23} color="black" style={{ marginRight: 18 }} />
              </TouchableOpacity>
            </View>
          ),
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => <Ionicons name="person" color={color} size={28} />,
        }}
      />


    </Tab.Navigator>
  );
}

export default MyTabs;
