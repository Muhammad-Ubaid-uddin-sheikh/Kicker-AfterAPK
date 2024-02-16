import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from './courtnavigations/HomeGround'
import SettingsScreen from './ReserverCourt'
import HoraiosCourt from './Horioir'
import ActividadesCourt from './Actividades'
const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
   
      tabBarOptions={{
        style: {
          borderTopWidth: 0,  
        },
        activeTintColor: "#408639", 
        inactiveTintColor: "black", 
        pressOpacity: 0, 
      
        labelStyle: { textTransform: 'Capitalize' },
        indicatorStyle: { backgroundColor: "#408639" } 
      }}
    >
      <Tab.Screen options={{ tabBarLabel: 'Hogar', headerShown: false , headerTitleStyle: {
         
        },
      }} name="Home" component={HomeScreen} />
      <Tab.Screen options={{
          tabBarLabel: 'Libro',
         headerShown: false , headerTitleStyle: {
         
        },
      }}
       name="Reservar" component={SettingsScreen} />
        {/* <Tab.Screen options={{
          tabBarLabel: 'HoraiosCourt',
         headerShown: false , 
      }}
      
       name="HoraiosCourt" component={HoraiosCourt} /> */}
        <Tab.Screen options={{
          tabBarLabel: 'Actividades',
         headerShown: false , 
      }}
      
       name="ActividadesCourt" component={ActividadesCourt} />
    </Tab.Navigator>
  );
}
export default  MyTabs