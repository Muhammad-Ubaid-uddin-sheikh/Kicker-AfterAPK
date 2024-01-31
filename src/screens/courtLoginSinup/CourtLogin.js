import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Button from '../../components/Button';
import { Fonts } from '../style';
import axios from 'axios';
// const API_URL = 'http://192.168.100.5:5000/register';
const API_URL = 'http://192.168.100.5:5000/login';
const App = ({navigation}) => {
  const [email, setemail] = useState('');
  const [Feildpassword, setFeildpassword] = useState('');
  
  const handleLogin = async () => {
    try {
      const response = await axios.post(API_URL, {
        email,
        Feildpassword,
      });

      if (response.status === 200) {
        Alert.alert('Registration successful!');
        navigation.navigate('Dashboard');
      
        // Navigate to home page or set authentication state
      }
    } catch (error) {
      Alert.alert('Invalid username or password');  
      
    }
  };

  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };
  return (

    <View style={styles.form}>
      <StatusBar  barStyle="dark-content"/>
      <View>
      <Text style={styles.heading}> Inicia sesiónuna cancha</Text>
      {/* <Text style={styles.headingSub}>Court Owner </Text> */}
      <Text style={styles.paragraphs}>
      Reserva canchas, encuentra partidos, conéctate con la comunidad y más.
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username / email"
          keyboardType="email-address"
          placeholderTextColor="rgba(33, 33, 33, 0.60)"
          letterSpacing={0.2}
          onChangeText={(text) => setemail(text)}
        />

      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="rgba(33, 33, 33, 0.60)"
          secureTextEntry={!isPasswordVisible}
          // value={password}
          letterSpacing={0.2}
          value={Feildpassword}
          onChangeText={(text) => setFeildpassword(text)}
        />
        <TouchableOpacity style={styles.eyeIcon} onPress={togglePasswordVisibility}>
          <Text style={styles.eyeText}>{isPasswordVisible ? <Icon name="eye" style={styles.eyeIcon} size={17} /> : <Icon name="eye-slash" style={styles.eyeIcon} size={17} />}</Text>
        </TouchableOpacity>
      </View>

      <Button text='Log In' Link={()=>navigation.navigate('CourtDashboard')} />
      </View>
      <Text style={styles.informationText}>¿Olvidaste tu contraseña ?</Text>
      <View style={styles.SinupText}>
        <TouchableOpacity style={styles.linkText}>
          <Text style={styles.informationText}> ¿No tienes una cuenta? <Text style={styles.TextLink} onPress={() => navigation.navigate('CourtSingup')} >Regístrate hoy!</Text> </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
 
  TextLink: {
    fontSize: 13,
    lineHeight: 24,
    color: '#408639',
    fontWeight: '600',
    fontFamily: 'Satoshi-Medium',
    letterSpacing: 0.4
  },
  SinupText: {
    position: 'absolute',
    bottom: 25,
    fontFamily: 'Satoshi-Medium',
    textAlign: 'center',
    justifyContent:'center',

  },
  image: {
    width: 20,
    height: 25,
    objectFit: 'contain'
  },
  form: {
    backgroundColor: '#fff',
    flex:1,
     position: 'relative',
     paddingTop: 15,
     justifyContent:'center',
     paddingLeft: 12,
    paddingRight: 12,
    alignItems:'center'
    

  },
  heading: {
    fontSize: 28,
    marginBottom: 10,
    color: 'black',
    textAlign: 'center',
    fontFamily: Fonts.SAMIBOLD,
  },
  paragraphs: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 15,
    color: '#61646B',
    letterSpacing: 0.3,

    lineHeight: 25,
    marginTop: 6,
    fontFamily: 'Satoshi-Medium'
  },
  inputContainer: {
    position: 'relative',
    marginBottom: 8,
    

  },
  input: {
   
     marginTop: 12,
        paddingLeft: 12,
        padding: 16,
        fontSize: 14,
        lineHeight: 20,
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
    right: 15,
    top: 35,
    color: 'rgba(64, 134, 57, 1)'
  },
  eyeText: {
    fontSize: 20,
  },
  informationText: {
    fontSize: 14,
    lineHeight: 24,
    color: '#61646B',
    textAlign: 'center',
    letterSpacing: 0.9,
    marginTop: 15,
    fontFamily: 'Satoshi-Medium',
    justifyContent:'center',


  },

});

export default App;
