
import React from 'react'
import { View, StyleSheet, StatusBar, Text,  } from 'react-native'
import PaymentComp from '../../../components/Paymentcom'

const CustomizeProfile = ({route,navigation}) => {
    // const inputData = route?.params?.inputData || 'No data available';
    const {Fechaval} = route.params
    const { Canchaval } = route.params 
    const { Horainicio } = route.params 
    const { finalizacion } = route.params 
    Handlepress=()=>{
        navigation.navigate('SlipPage', { Canchaval,Fechaval,finalizacion,Horainicio});
    }
  
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'white'}  barStyle="dark-content" />
                <PaymentComp SecondIcon="arrow-forward-ios"  text="Confirmar pago" Link={Handlepress}/>
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