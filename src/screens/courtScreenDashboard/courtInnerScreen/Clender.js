import React from 'react'
import { Text, View, StyleSheet} from 'react-native'
import Button from '../../../components/ButtonCourtOwner';
import { Fonts } from '../../style';
import Clander from './clander/Clander'
const Clender = ({navigation}) => {
  return (
    <View style={styles.MainContainer}>
<View style={styles.buttonContainer}>
<Button text="Revisa tus instalaciones" FontName="angle-right" ColorIcon="black" />
    </View>
    <View >
        <Text style={styles.textHeading}>Filtrar por fecha</Text>
    <Button text="DD/MM/YYYY" FontName="date" ColorIcon="green" Link={() => navigation.navigate('Shadule')} /> 
    </View>
    <View >
      <Text style={[styles.textHeading,{paddingBottom:15}]}>Disponibilidad</Text>
    <Clander/>
    </View>
    </View>
  )
}
const styles= StyleSheet.create({

    textHeading: {
        fontSize: 20,
        color: '#000',
        marginTop: 20,
        fontFamily: Fonts.BOLD,
        marginLeft:20,
       
    },
    MainContainer:{
        width:'auto',
        backgroundColor:'white',
        flex:1,
       
    },
    buttonContainer:{
      marginTop:10
    }
   
    
})
export default Clender
