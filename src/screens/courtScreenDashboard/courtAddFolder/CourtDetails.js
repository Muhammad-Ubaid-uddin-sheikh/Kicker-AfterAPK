
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import CustomInputFeild from '../../../components/inputFeildCustom'
import Icons from 'react-native-vector-icons/MaterialIcons'
import Buttons from '../../../components/Button';

import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Foot from '../../setting/Foot'
import ImaeUrlBased from '../../../apis/ImageBasedUrl'
import { Fonts } from '../../style';
const Uplaod_ImageURL = 'https://kickers-backend-5e360941484b.herokuapp.com/api/court/upload'
const API_URL_POST = 'https://kickers-backend-5e360941484b.herokuapp.com/api/court/createCourtFields'

const Signup = ({ navigation,route }) => {
  const { fetchCourtData} = route.params;
  const [loading, setLoading] = useState(false);
const [courtId , SetCourtId] = useState(null)
const GetCourtId = async () =>{
  const court = await AsyncStorage.getItem('Court')
  const ID = JSON.parse(court)._id
  SetCourtId(ID)
}
  useEffect(() =>{
    GetCourtId()
  },[])  
  const [Fieldname, setFieldname] = useState('')
  const [FieldPrice, setFieldPrice] = useState('')
  const [TurfType, setTurfType] = useState('')
  const [responseData, setResponseData] = useState(null);
  const [imagePaths, setImagePaths]  = useState([])
  console.log("response",responseData?.data)
  const [imageUri, setImageUri] = useState(null);
  const handleImagePicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then((image) => {
        uploadImage(image.path);
        setImageUri(image.path)
      })
      .catch((error) => {
        console.log('ImagePicker Error: ', error);
      });
  };
console.log("image")
  const Cancha = [
    { id: 1, name: '30' },
    { id: 2, name: '60' },
    { id: 3, name: '90' },
    { id: 4, name: '120' },
  ];
const [iCanchavalVisible, setCanchavalVisible] = useState(false);
const [Canchaval, setCanchaval] = useState(null);
const handleSelectFirst = item => {
    setCanchaval(item);
    setCanchavalVisible(false);
  };


const [StringCanchaval] = [Canchaval?.name]
  const Paylod = {
    courtId,
    fields:[
   { 
    name:Fieldname,
    turfType:TurfType,
    images:imagePaths,
    defaultPrice:FieldPrice,
    sessionDuration:parseInt(StringCanchaval),
  }
  ]
  }
  const handleNavigate = async () => {
   try {
    if (
      Fieldname === '' ||
      TurfType === '' ||
      imageUri === null ||
      FieldPrice === '' ||
      Canchaval === null
  ) {
      Alert.alert('Error', 'Please fill all fields');
  } else {

    // console.log('heelo',Paylod)
    // navigation.navigate('AnalyticsScreen');
    setLoading(true);
    const accessToken = await AsyncStorage.getItem('accessTokenCourt'); // Replace with your actual access token
    const apiUrl = API_URL_POST; 
    const response = await axios.post(apiUrl, Paylod, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });
    console.log('Data posted successfully:', response.data);
    setResponseData(response.data);
    fetchCourtData()
    console.log('Data posted successfully:', response.data);
    navigation.navigate('AnalyticsScreen')
    // navigation.navigate('AnalyticsScreen')
  }
        
   } catch (error) {
    
    console.error('Error posting data:', error);
 
   }finally{
    setLoading(false);
   }
  }
  const uploadImage = async (image)=> {
   
    console.log('useefftworking')
    const formdData = new FormData()
    formdData.append('image', {
      uri: image,
      type: 'image/jpeg', // Adjust the type according to your image format
      name: 'image.jpg', // The name should be unique
    });
    try {
      const token = await AsyncStorage.getItem('accessTokenCourt')
      const res = await axios.post(Uplaod_ImageURL,formdData, {
        headers:{
          Authorization:`Bearer ${token}`,
          'Content-Type':'multipart/form-data'
        }
      })
     if(res.data.code == 200) setImagePaths([...imagePaths, `${ImaeUrlBased}${res.data.data.path}`])
      console.log("imageRes", res.data.data)

      
    } catch (error) {
      console.log("errror", error.response)
    }
   

  }
  
console.log('paths array......',imagePaths)


  return (

    <View style={[styles.inputContainer, { paddingTop: 0 }]}>
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <CustomInputFeild focus={true} labelName='Nombre de la cancha' value={Fieldname}
          onChangeText={(text) => setFieldname(text)}
        />
        <CustomInputFeild focus={true} labelName='Tipo de superficie' value={TurfType} onChangeText={(text) => setTurfType(text)} />
       <View style={{paddingTop:10}}>
       <Foot visible={iCanchavalVisible}
                   selectedValue={Canchaval ? Canchaval.name : ''}
                    PopupOn={()=>setCanchavalVisible(true)}
        onClose={() => setCanchavalVisible(false)}
         onSelect={handleSelectFirst} options={Cancha} placeHolder="Duración de la sesión         " />
       </View>
       <CustomInputFeild focus={true} labelName='Precios' value={FieldPrice}
          onChangeText={(text) => setFieldPrice(text)}
        />
               
        <TouchableOpacity style={styles.buttonContainer} onPress={handleImagePicker}>
          <View style={styles.textContainer}>
            <Text style={styles.mainText}>Imágenes</Text>
            <Icons name="arrow-forward-ios" size={20} color="rgba(64, 134, 57, 1)" />
          </View>
        </TouchableOpacity>
        {imageUri && <Image source={{ uri:imageUri }} style={{ width: 340, height: 150, objectFit: 'cover', borderRadius: 12 }} />}
        {/* <Display /> */}
      </ScrollView>
      <View style={[styles.buttonNextButton, { marginTop: 10, backgroundColor: 'white' }]}>
        <Buttons text='¿Terminaste de agregar campos?' Link={handleNavigate} loading={loading} />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
    fontFamily: Fonts.MEDIUM,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 10
  },
  textContainer: {
    flex: 1, // Take remaining space
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,// width: 345,
    paddingLeft: 12,
    padding: 16,
    paddingRight: 25,
    fontSize: 14,
    lineHeight: 20,
    borderRadius: 10,
    borderWidth: 0.25,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 1,
    color: '#212121',
    fontFamily: Fonts.MEDIUM,
    backgroundColor: 'rgba(64, 134, 57, 0.05)'

  },
  mainText: {
    paddingLeft: 8,
    color: '#212121',
    fontFamily: Fonts.MEDIUM,
    fontSize: 15,
    letterSpacing: 0.5
  },

  container: {
    flex: 1,
  },
  buttonNextButton: {
    bottom: 10,
    backgroundColor: 'white'
  },
  inputContainer: {
    // position: 'relative',
    flex: 1,
    justifyContent:'center',

    paddingHorizontal:20,
  },

});

export default Signup;
