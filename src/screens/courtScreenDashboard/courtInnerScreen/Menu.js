import React from 'react'
import { Text, View, StyleSheet, TextInput} from 'react-native'
import { Fonts } from '../../style';
import Icons from 'react-native-vector-icons/EvilIcons'
import TodoGround from './todoGroud/TodoGround'
const Clender = ({navigation}) => {
  return (
    <View style={styles.MainContainer}>
 <View style={styles.inputMainContainner}>
                        <View style={styles.searchbarContainer}>
                            <Icons name='search' style={styles.Searchicon} size={30} />
                            <TextInput
                                style={styles.input}
                                placeholder="Tipo de superficie, nombre"
                                // value={searchText}
                                // onChangeText={""}
                                placeholderTextColor="rgba(33, 33, 33, 0.60)"
                            />
                        </View>

                        {/* <FlatList
                            data={filteredCountries}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.cca3}
                        /> */}

                    </View>
                    <TodoGround/>
    <View >
        <Text style={styles.textHeading}>Filtrar por fecha</Text>
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
    },
    Searchicon: {
      position: 'absolute',
      top: 27,
      left: 10,
      color: 'black'
  },
  input: {
      marginTop: 12,
      paddingLeft: 42,
      padding: 16,
      marginBottom: 10,
      paddingRight: 40,
      fontSize: 14,
      lineHeight: 20,
      width: 360,
      borderRadius: 12,
      borderWidth: 0.25,
      borderColor: 'rgba(0, 0, 0, 0.25)',
      shadowOffset: { width: 0, height: 1 },
      shadowRadius: 2,
      shadowOpacity: 1,
      color: '#212121',
      fontFamily: Fonts.BOLD,
      backgroundColor: 'rgba(64, 134, 57, 0.05)',

  },
  searchbarContainer: {
      position: 'relative',
      width: 360,
      flexDirection: 'row',
      marginLeft: 0
  },
  inputMainContainner: {
      paddingLeft:15,
      paddingTop:5
  },
    
})
export default Clender
