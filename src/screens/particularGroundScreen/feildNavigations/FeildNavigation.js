import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from './homeNavigation/HomeGround'
import SettingsScreen from './reservar/Reservar'
import Horaios from './horarios/Horarios'
import Actividades from './actividades/Actividades'
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
      <Tab.Screen options={{ tabBarLabel: 'Inicio', headerShown: false , headerTitleStyle: {
         
        },
      }} name="Home" component={HomeScreen} />
      <Tab.Screen options={{
          tabBarLabel: 'Reservar',
         headerShown: false , headerTitleStyle: {
         
        },
      }}
       name="Reservar" component={SettingsScreen} />
        <Tab.Screen options={{
          tabBarLabel: 'Horaios',
         headerShown: false , 
      }}
      
       name="Horarios" component={Horaios} />
        <Tab.Screen options={{
          tabBarLabel: 'Actividades',
         headerShown: false , 
      }}
      
       name="Actividades" component={Actividades} />
    </Tab.Navigator>
  );
}
export default  MyTabs