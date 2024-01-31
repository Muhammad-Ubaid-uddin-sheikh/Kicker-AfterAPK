import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from './homeNavigation/HomeGround'
import SettingsScreen from './reservar/Reservar'
import Horaios from './horarios/Horarios'
import Actividades from './actividades/Actividades'
import { Fonts } from '../../style';
const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    // <Tab.Navigator 
    // screenOptions={{
    //   tabBarLabelStyle: { fontSize: 12,},
    //   // tabBarItemStyle: { width: '100' },
    //   headerShown: false ,
    // }}
    // tabBarOptions={{
    //   style: {
    //     borderTopWidth: 0, // Hide the top border
    //     elevation: 0, // Remove shadow on Android
    //     shadowOpacity: 0, // Remove shadow on iOS
    //     labelStyle: { textTransform: 'lowercase' }
    //   },
    //     activeTintColor: '#408639', 
    //     inactiveTintColor: '#000000', 
    //     indicatorStyle: { backgroundColor: '#408639' },
    //     labelStyle: { textTransform: 'lowercase' }
       
        
    //   }}
    // ><Tab.Navigator
    <Tab.Navigator
   
      tabBarOptions={{
        style: {
          borderTopWidth: 0,
           // Hide the top border
          
        },
       
        activeTintColor: "#408639",  // Color of the active tab label
        inactiveTintColor: "black", // Color of inactive tab labels
        pressOpacity: 0, // Remove the light black overlay when clicked
      
        labelStyle: { textTransform: 'Capitalize' },
        indicatorStyle: { backgroundColor: "#408639" } // Set the tab labels to lowercase
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