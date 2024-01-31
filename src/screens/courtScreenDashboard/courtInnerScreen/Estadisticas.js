import React from 'react'
import { Text, View, StyleSheet} from 'react-native'
import { Fonts } from '../../style';

const Clender = ({navigation}) => {
  return (
    <View style={styles.MainContainer}>
<View style={styles.buttonContainer}>
    </View>
    <View >
        <Text style={styles.textHeading}>etheadad</Text>
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
