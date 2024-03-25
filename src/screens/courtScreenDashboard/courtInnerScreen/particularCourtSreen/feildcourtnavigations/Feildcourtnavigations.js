import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from './courtnavigations/HomeGround'
import SettingsScreen from './ReserverCourt'
import ActividadesCourt from './Actividades'
const Tab = createMaterialTopTabNavigator();

function MyTabs({PerHour,SecHour,ThirdHour,item}) {
  return (
    <Tab.Navigator
   
      screenOptions={{
        tabBarActiveTintColor: "#408639",
        tabBarInactiveTintColor: "black",
        tabBarPressOpacity: 0,
        tabBarLabelStyle: { textTransform: 'capitalize' },
        tabBarIndicatorStyle: { backgroundColor: "#408639" },
        tabBarStyle: { borderTopWidth: 0 }
      }}
    >
      <Tab.Screen options={{ tabBarLabel: 'Hogar', headerShown: false , headerTitleStyle: {
         
        },
      }} name="Home"
       component={HomeScreen} initialParams={
        {
         PerHour:PerHour,SecHour:SecHour,ThirdHour:ThirdHour,item
        }
         
         }/>
      <Tab.Screen options={{
          tabBarLabel: 'Libro',
         headerShown: false , headerTitleStyle: {
         
        },
      }}
       name="Reservar" component={SettingsScreen}  />
        <Tab.Screen options={{
          tabBarLabel: 'Actividades',
         headerShown: false , 
      }}
      
       name="ActividadesCourt" component={ActividadesCourt} />
    </Tab.Navigator>
  );
}
export default  MyTabs