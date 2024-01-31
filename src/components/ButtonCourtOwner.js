import React from 'react'
import { Text, View ,StyleSheet, TouchableOpacity} from 'react-native'
import Icons from 'react-native-vector-icons/Fontisto'
import { Fonts } from '../screens/style';
const Button = ({text,Link,FontName,ColorIcon}) => {

    const ButtonStyle={
        color: ColorIcon || 'red',
    }
    
  return (
<View>
<TouchableOpacity style={styles.button}  onPress={Link}>
              <Text style={styles.buttonText}>{text}</Text><Icons name={FontName} style={[styles.eyeIconButoon,ButtonStyle]} size={17}  />
            </TouchableOpacity>
</View>
  )
}
const styles = StyleSheet.create({
 button: {
    backgroundColor: 'rgba(64, 134, 57, 0.05)',
    padding: 15,
    marginTop:10,
    borderRadius:12,
    borderColor:'rgba(64, 134, 57, 0.05)',
    borderWidth: 0.5, // Set the border width
    fontFamily:Fonts.MEDIUM,
    marginLeft:15,
    marginRight:15,
    // width:355,
    paddingTop:20,
    paddingBottom:20,
    display:'flex',
    justifyContent:'center',
    fontWeight:700
    
      },
      buttonText:{
        paddingLeft:5,
        color: 'black',
        fontFamily:Fonts.MEDIUM,
        letterSpacing:0.5,
        fontSize:15
      },
      eyeIconButoon:{
        position: 'absolute',
        right: 22,
        top: 20.5,
        color:'black'
      }, 
    })

export default Button