import React from 'react'
import { View, StyleSheet, Text, Image, StatusBar, TouchableOpacity } from 'react-native';
import ColoredLine from '../../components/LineComponet';
import { Fonts } from '../style';
import { useState } from 'react';
import Button from '../../components/Button';
import { useDispatch } from 'react-redux';
const CustomizeProfile = ({navigation}) => {
  const dispatch = useDispatch();
    const [selectedItem, setSelectedItem] = useState(null);

  const handleImageClick = (item) => {

    setSelectedItem(item === selectedItem ? null : item);
  };

  const handleNavigate = () => {
    if (selectedItem) {
      dispatch({
        type: 'SET_USER_FOOT',
        payload: {selectedItem},
    });
      navigation.navigate('CustomizeProfileNationlity');
    } else {
      console.warn('Please select the foot do you play.');
    }
  };
    return (
        <View style={styles.container}>
            
            
            <StatusBar backgroundColor={'white'}  barStyle="dark-content" />
            <View style={styles.MainContainer}>
                <ColoredLine flex={1.8} />
                <Text style={styles.MainHeading} >¿ Cuál es tu pie</Text>
                <View style={styles.ShoeContainer}>
                    <View style={styles.row}>
                        <View style={styles.ShoeCon}>

                          
                          <TouchableOpacity onPress={() => handleImageClick('Left Foot')}>
        <Image
          source={selectedItem === 'Left Foot' ? require('../../assets/leftGreen.png') : require('../../assets/left.png')}
          style={{ width: 130, height: 130 }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleImageClick('Left Foot')}>
        <Text style={[styles.textPoints, selectedItem === 'Left Foot' && styles.selectedText]}>
          {selectedItem === 'Left Foot' ? 'Left Foot' : 'Left Foot'}
        </Text>
      </TouchableOpacity>

     

                            
                        </View>
                        <View style={styles.ShoeCon}>
                        <TouchableOpacity onPress={() => handleImageClick('Right Foot')}>
        <Image
          source={selectedItem === 'Right Foot' ? require('../../assets/rightGreen.png') : require('../../assets/right.png')}
          style={{ width: 130, height: 130 }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleImageClick('Right Foot')}>
        <Text style={[styles.textPoints, selectedItem === 'Right Foot' && styles.selectedText]}>
          {selectedItem === 'Right Foot' ? 'Right Foot' : 'Right Foot'}
        </Text>
      </TouchableOpacity>
                       
                        </View>
                    </View>

                </View>
                <View style={styles.nextButton}>
    <Button Link={handleNavigate} text="Siguiente"/>
                  
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ShoeContainer: {
        // marginTop: 80,
        position:'absolute',
bottom:320
    },
    textPoints: {
        fontSize: 16,
        lineHeight: 24,
        color: '#61646B',
        marginLeft: 38,
        marginTop: 30,
       fontFamily: 'Satoshi-Medium'
    },
    ShoeCon: {
        textAlign: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        // Other container styles
        backgroundColor: 'white',
        justifyContent:'center',
        alignItems:'center'
    },
    MainContainer: {
        flex: 1,
        alignItems: 'center',
        width: 'auto',
        paddingLeft: 5,
        paddingRight: 5
    },
    MainHeading: {
        fontSize: 28,
        color: 'black',
        textAlign: 'center',
        fontFamily: Fonts.BOLD,
        width: 300,
        lineHeight: 36,
        marginTop:30,
    },
    ImageContainer: {
        marginTop: 30
    },
    nextButton: {
        position: 'absolute',
        bottom: 25,
        width:320
    }
    ,
    row: {
        flexDirection: 'row', // Arrange points and text horizontally
        alignItems: 'center', // Center content vertically
        gap: 47,
    },
      selectedText: {
        color: '#408639',
        // Add other styles for the selected state
      },
     
});

export default CustomizeProfile