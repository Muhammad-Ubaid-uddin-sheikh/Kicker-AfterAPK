
import React from 'react'
import { View, StyleSheet, StatusBar, Text,  } from 'react-native'


const CustomizeProfile = ({ route }) => {
   
    const { Canchaval } = route.params 
    const {Fechaval} = route.params
    const { Horainicio } = route.params 
    const { finalizacion } = route.params 
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'white'}  barStyle="dark-content" />
                <Text> {Canchaval ? Canchaval.name : 'None'} data value  </Text>
                <Text> {Fechaval ? Fechaval.name : 'None'} data value  </Text>
                <Text> {Horainicio ? Horainicio.name : 'None'} data value  </Text>
                <Text> {finalizacion ? finalizacion.name : 'None'} data value  </Text>
        </View>
        
    )
}
const styles = StyleSheet.create({
   
  
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        
    }, 
   
  
   
});

export default CustomizeProfile