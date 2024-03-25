
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import CustomInputFeild from '../../../../../../components/inputFeildCustom'
import Icons from 'react-native-vector-icons/MaterialIcons'
import Buttons from '../../../../../../components/Button';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Foot from '../../../../../setting/Foot'
import ImaeUrlBased from '../../../../../../apis/ImageBasedUrl'
import { Fonts } from '../../../../../style';
const Uplaod_ImageURL = 'https://kickers-backend-5e360941484b.herokuapp.com/api/court/upload'
const API_URL_POST = 'https://kickers-backend-5e360941484b.herokuapp.com/api/court/updateFieldDetails'
const EditCourtFeilds = ({ route,navigation}) => {
    const {item} = route.params;
    const [imageUriItem] = item.images
  const [Fieldname, setFieldname] = useState(item.name)
  const [TurfType, setTurfType] = useState(item.turfType)
  const [imagePaths, setImagePaths]  = useState([])
  const [imageUri, setImageUri] = useState(imageUriItem);
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
const [selectedSessionDuration, setSelectedSessionDuration] = useState(null);
console.log('selectedSessionDuration',item._id)
const [iCanchavalVisible, setCanchavalVisible] = useState(false);
useEffect(() => {
    if (item.sessionDuration) {
      setSelectedSessionDuration(item.sessionDuration.toString());
    }
  }, [item.sessionDuration]);

  const Cancha = [
    { id: 1, name: '30' },
    { id: 2, name: '60' },
    { id: 3, name: '90' },
    { id: 4, name: '120' },
  ];

  const handleSelectFirst = item => {
    setSelectedSessionDuration(item.name); 
    setCanchavalVisible(false); 
  };
  
  console.log("imagePath",imagePaths ,'items',item)
  const handleNavigate = async () => {
    const Paylod ={ 
      name:Fieldname,
      turfType:TurfType,
      images:imagePaths,
      sessionDuration:selectedSessionDuration,
      fieldId:item._id
    }
   try {
    if (
      Fieldname === '' ||
      TurfType === '' ||
      imageUri === null 
  ) {
      Alert.alert('Error', 'Please fill all fields');
  } else {  
    const accessToken = await AsyncStorage.getItem('accessTokenCourt'); // Replace with your actual access token
    const apiUrl = API_URL_POST; 
    const response = await axios.post(apiUrl, Paylod, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });
    console.log(Paylod)
    navigation.navigate('AnalyticsScreen')
    Alert.alert('update Your Court Feild')
  }
        
   } catch (error) {
    
    console.error('Error posting data:', error);
 
   }
  }
  const uploadImage = async (image)=> {
   
    console.log('useefftworking')
    const formdData = new FormData()
    formdData.append('image', {
      uri: image,
      type: 'image/jpeg', 
      name: 'image.jpg', 
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

  useEffect(()=>{
    if(Boolean(imageUriItem)){
      setImagePaths(imageUriItem)
    }
  },[imageUriItem])


  return (

    <View style={[styles.inputContainer, { paddingTop: 0 }]}>
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <CustomInputFeild focus={true} labelName='Nombre de la cancha' value={Fieldname}
          onChangeText={(text) => setFieldname(text)}
        />
        <CustomInputFeild focus={true} labelName='Tipo de superficie' value={TurfType} onChangeText={(text) => setTurfType(text)} />
       <View style={{paddingTop:10}}>
       <Foot
        visible={iCanchavalVisible}
        selectedValue={selectedSessionDuration}
        PopupOn={() => setCanchavalVisible(true)}
        onClose={() => setCanchavalVisible(false)}
        onSelect={handleSelectFirst}
        options={Cancha}
        placeHolder="Select Session Duration"
      />
       </View>      
        <TouchableOpacity style={styles.buttonContainer} onPress={handleImagePicker}>
          <View style={styles.textContainer}>
            <Text style={styles.mainText}>Imágenes</Text>
            <Icons name="arrow-forward-ios" size={20} color="rgba(64, 134, 57, 1)" />
          </View>
        </TouchableOpacity>
        {imageUri && <Image source={{ uri:imageUri }} style={{ width: 340, height: 150, objectFit: 'cover', borderRadius: 12 }} />}
      </ScrollView>
      <View style={[styles.buttonNextButton, { marginTop: 10, backgroundColor: 'white' }]}>
        <Buttons text='¿Terminaste de actualizar los campos?' Link={handleNavigate} />
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
    flex: 1,
    justifyContent:'center',

    paddingHorizontal:20,
  },

});

export default EditCourtFeilds;
