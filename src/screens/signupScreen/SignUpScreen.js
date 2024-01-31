
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, StatusBar,Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import NewIcons from 'react-native-vector-icons/Fontisto'
import FaIcon from 'react-native-vector-icons/MaterialIcons'
import Button from '../../components/Button';
import { Fonts } from '../style';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
const API_URL = 'https://kickers-backend-5e360941484b.herokuapp.com/api/player/signUp';
const Sigup = ({ navigation }) => {

    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [Username, setUsername] = useState('');
    const [Feildpassword, setFeildpassword] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    let payload = {
        username:Username,
    password:Feildpassword,
    email:email,
    dob:dateOfBirth,
    name:name
    
    }



    const handleDateChange = (text) => {
        // Assuming the input format is DDMMYYYY
        const formattedDate = text.replace(/[^0-9]/g, '');

        // Format the date string as DD/MM/YYYY
        let formattedDateString = '';
        for (let i = 0; i < formattedDate.length; i++) {
            if (i === 2 || i === 4) {
                formattedDateString += '/';
            }
            if (i === 6 && formattedDate.length >= 7) {
                formattedDateString += formattedDate.substring(6, 10); // Ensure year is four digits
                break;
            }
            formattedDateString += formattedDate[i];
        }

        setDateOfBirth(formattedDateString);

    };


    const handleNavigate = ()=>{
        if (!name || !email || !Username || !Feildpassword || !dateOfBirth) {
            Alert.alert('Incomplete Details', 'Please fill in all fields.');
        }
        
        dispatch({
            type: 'SET_SIGNUP_DATA',
            payload: { name, email, Username, Feildpassword ,dateOfBirth},
        });
        navigation.navigate('CustomizeProfile');
    
    }
    // const handleNavigate = async () => {
    //     dispatch({
    //                 type: 'SET_SIGNUP_DATA',
    //                 payload: { name, email, Username, Feildpassword },
    //             });
    //     try {
    //         const response = await axios.post(API_URL, {
    //           ...payload
    //         });
    //         const token = response.data.token;
    //         await AsyncStorage.setItem('token', token);
    //         return true;
      
    //         if (response.status === 200) {
    //           Alert.alert(JSON.stringify(response.data));
    //           navigation.navigate('CustomizeProfile');
            
    //           // Navigate to home page or set authentication state
    //         }
    //       } catch (error) {
    //         // Alert.alert(JSON.stringify(error.response));  
    //         Alert.alert(JSON.stringify(error.response));  
    //       }
    //   };
    

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        // Format the date as needed
        const formattedDate = date.toISOString().split('T')[0]; // Get the date part
        setSelectedDate(formattedDate);
        hideDatePicker();
    };
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setPasswordVisibility] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisibility(!isPasswordVisible);
    };


    const [RePassword, setRePassword] = useState('');
    const [isRePasswordVisible, setRePasswordVisibility] = useState(false);

    const toggleRePasswordVisibility = () => {
        setRePasswordVisibility(!isRePasswordVisible);
    };

    return (
        <ScrollView style={styles.form} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
             <StatusBar backgroundColor={'white'} barStyle="dark-content" />
            <Text style={styles.heading}>Registrate</Text>
            {/* <Text style={styles.headingSub}>Court Owner </Text> */}

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Nombre"
                    placeholderTextColor="rgba(33, 33, 33, 0.60)"
                    letterSpacing={0.1}
                    value={name}
                 
                    onChangeText={(text) => setName(text)}
                    
                />


            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                    placeholderTextColor="rgba(33, 33, 33, 0.60)"
                    letterSpacing={0.1}
                    value={email}
                
        onChangeText={(text) => setEmail(text)}

                />

            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Nombre de usuario"
                    keyboardType="default"
                    placeholderTextColor="rgba(33, 33, 33, 0.60)"
                    letterSpacing={0.1}
                    value={Username}
                    
        onChangeText={setUsername}
   
                />
                
            </View>
            <View style={styles.inputContainer}>

                <TextInput
                    style={styles.input}
                    placeholder="Fecha de nacimiento"
                    value={dateOfBirth}
                onChangeText={handleDateChange}
                    letterSpacing={0.1}
                    placeholderTextColor="rgba(33, 33, 33, 0.60)"
                />
                {/* <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                /> */}
                <NewIcons name='date' style={styles.eyeIcon} size={17} />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    placeholderTextColor="rgba(33, 33, 33, 0.60)"
                    secureTextEntry={!isPasswordVisible}
                    value={Feildpassword}
                    onChangeText={(text) => setFeildpassword(text)}
                    letterSpacing={0.1}
                />
                <TouchableOpacity style={styles.eyeIcon} onPress={togglePasswordVisibility}>
                    <Text style={styles.eyeText}>{isPasswordVisible ? <Icon name="eye" style={styles.eyeIcon} size={17} /> : <Icon name="eye-slash" style={styles.eyeIcon} size={17} />}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Confirma tu contraseña"
                    placeholderTextColor="rgba(33, 33, 33, 0.60)"
                    secureTextEntry={!isRePasswordVisible}
                    value={RePassword}
                    letterSpacing={0.1}
                    onChangeText={(text) => setRePassword(text)}
                />
                <TouchableOpacity style={styles.eyeIcon} onPress={toggleRePasswordVisibility}>
                    <Text style={styles.eyeText}>{isRePasswordVisible ? <Icon name="eye" style={styles.eyeIcon} size={17} /> : <Icon name="eye-slash" style={styles.eyeIcon} size={17} />}</Text>
                </TouchableOpacity>
            </View>
            <Button text="Registrate " 
            Link={handleNavigate} 
            // Link={()=>navigation.navigate('CustomizeProfile')
        
            />

            <Text style={styles.informationText} >Al registrarte aceptas nuestros <Text style={{ color: '#408639' }}>términos y condiciones</Text></Text>
            <View style={styles.SinupText}>

                <TouchableOpacity style={styles.buttonGoole}>
                    <Image source={require('../../assets/google.png')} style={styles.image} />
                    {/* <GooIcon name='google' style={styles.googleICon} color='rgb(52, 168, 90)' size={25}  /> */}
                    <Text style={styles.buttonTextGoogle}>Continuar con Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonGoole}>
                    <FaIcon name='facebook' style={styles.googleICon} color='#4267B2' size={25} />
                    <Text style={styles.buttonTextGoogle} >Continuar con Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.linkText}>
                    <Text style={styles.informationTextAccont}>¿Ya tienes una cuenta? <Text style={styles.TextLink} onPress={() => navigation.navigate('LoginScreen')} >Inicia sesión!</Text> </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    linkText: {
        marginTop: 10,
        paddingBottom: 10,
        marginBottom: 28,
        fontFamily: 'Satoshi-Regular'
    },
    buttonGoole: {
        backgroundColor: 'white',
        padding: 15,
        marginTop: 25,
        borderRadius: 12,
        // width: 338,
        borderColor: '#AFB1B6',
        borderWidth: 0.5, // Set the border width
       fontFamily: 'Satoshi-Regular',
        // marginLeft: 25,
        // marginRight: 25
    },
    buttonTextGoogle: {
        color: 'black',
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
        fontFamily: 'Satoshi-Regular'

    },
    TextLink: {
        fontSize: 15,
        lineHeight: 24,
        color: '#408639',
        fontWeight: '800',
    },
    SinupText: {
        marginTop: 0,

        textAlign: 'center',

    },
    image: {
        width: 20,
        height: 25,
        objectFit: 'contain',
        position: 'absolute',
        top: 14,
        left: 20,
    },
    form: {
        backgroundColor: '#fff',
        flex:1,
         position: 'relative',
         paddingTop: 15,
         paddingLeft:18,
         paddingRight:18,

    },
    heading: {
        fontSize: 28,
        marginBottom: 10,
        color: 'black',
        fontFamily: Fonts.SAMIBOLD,
        textAlign: 'center',
        marginTop: 25
    },
    paragraphs: {
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 16,
        color: '#61646B',
        letterSpacing: 1,
        fontFamily: 'Satoshi-Medium'
    },
    inputContainer: {
        position: 'relative',
        marginBottom: 8,
        // width: 320,
        // marginLeft: 22,
        // marginRight: 30
    },
    input: {
        marginTop: 12,
        paddingLeft: 12,
        padding: 16,
        // paddingRight: 40,
        fontSize: 14,
        lineHeight: 20,
        // width: 345,
        borderRadius: 12,
        borderWidth: 0.25,
        borderColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
        shadowOpacity: 1,
        color: '#212121',
        fontFamily: 'Satoshi-Medium',
        backgroundColor: 'rgba(64, 134, 57, 0.05)'
    },
    iconContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        padding: 16,
        justifyContent: 'center',
    },
    eyeIcon: {
        position: 'absolute',
        right: 30,
        top: 35,
        color: '#408639'
    },
    googleICon: {

        position: 'absolute',
        top: 14,
        left: 20
    },
    eyeText: {
        fontSize: 20,
    },
    informationText: {
        fontSize: 13,
        lineHeight: 16,
        color: '#61646B',
        textAlign: 'center',
        letterSpacing: 0.2,
        marginTop: 8,
        paddingBottom: 30,
       fontFamily: 'Satoshi-Medium'
    },
    informationTextAccont: {
        fontSize: 15,
        lineHeight: 16,
        color: '#61646B',
        textAlign: 'center',
        letterSpacing: 0.2,
        marginTop: 8,
        fontFamily: 'Satoshi-Medium'
    },
    headingSub: {
        fontSize: 18,
        marginBottom: 10,
        color: 'black',
        fontFamily: Fonts.SAMIBOLD,
        textAlign: 'center',
        letterSpacing: 0.2
    },
});

export default Sigup;
