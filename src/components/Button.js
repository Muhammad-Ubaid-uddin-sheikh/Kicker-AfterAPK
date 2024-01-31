import React from 'react'
import { Text, View ,StyleSheet, TouchableOpacity} from 'react-native'
import Icons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';
import { Fonts } from '../screens/style';
export const Button = ({text,Link}) => {
    const navigation = useNavigation()
  return (
<View>
<TouchableOpacity style={styles.button}  onPress={Link}>
              <Text style={styles.buttonText}>{text}</Text><Icons name='arrow-forward-ios' style={styles.eyeIconButoon} size={17}  />
            </TouchableOpacity>
</View>
  )
}
const styles = StyleSheet.create({
 button: {
    backgroundColor: '#212121',
    padding: 15,
    // marginTop:10,
    borderRadius:12,
    borderColor:'#212121',
    borderWidth: 0.5, // Set the border width
    fontFamily:Fonts.MEDIUM,
    
      },
      buttonText:{
        paddingLeft:5,
        color: '#EFEFF0',
        fontFamily:Fonts.MEDIUM,
      },
      eyeIconButoon:{
        position: 'absolute',
        right: 22,
        top: 16.5,
        color:'#FFFFFF'
      }, 
    })

export default Button