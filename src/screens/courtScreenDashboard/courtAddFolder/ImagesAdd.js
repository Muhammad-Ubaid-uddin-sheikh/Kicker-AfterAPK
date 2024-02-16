import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert, ScrollView } from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Octicons';
import Button from '../../../components/ButtonslipAndcencel';

const ImagePickerInput = ({navigation}) => {



  const [selectedImages, setSelectedImages] = useState([]);
  const [favoriteImageIndex, setFavoriteImageIndex] = useState(0);

  useEffect(() => {
    loadSelectedImages();
    loadFavoriteImageIndex();
  }, []);

  useEffect(() => {
    saveSelectedImages();
  }, [selectedImages]);

  useEffect(() => {
    saveFavoriteImageIndex();
  }, [favoriteImageIndex]);

  const loadSelectedImages = async () => {
    try {
      const storedImagesJson = await AsyncStorage.getItem('selectedImages');
      if (storedImagesJson) {
        const storedImages = JSON.parse(storedImagesJson);
        setSelectedImages(storedImages);
      }
    } catch (error) {
      console.log('Error loading selected images:', error);
    }
  };

  const saveSelectedImages = async () => {
    try {
      await AsyncStorage.setItem('selectedImages', JSON.stringify(selectedImages));
    } catch (error) {
      console.log('Error saving selected images:', error);
    }
  };

  const loadFavoriteImageIndex = async () => {
    try {
      const index = await AsyncStorage.getItem('favoriteImageIndex');
      if (index !== null) {
        setFavoriteImageIndex(parseInt(index));
      }
    } catch (error) {
      console.log('Error loading favorite image index:', error);
    }
  };

  const saveFavoriteImageIndex = async () => {
    try {
      await AsyncStorage.setItem('favoriteImageIndex', favoriteImageIndex.toString());
    } catch (error) {
      console.log('Error saving favorite image index:', error);
    }
  };

  const pickImage = () => {
    ImageCropPicker.openPicker({
      multiple: true,
      cropping: true,
    }).then(images => {
      if (!images || images.length === 0) {
        Alert.alert('No images selected');
        return;
      }

      const newSelectedImages = [...selectedImages, ...images];
      setSelectedImages(newSelectedImages);
      Alert.alert(`${images.length} image(s) selected`);
    }).catch(error => {
      console.log('Error selecting images:', error);
    });
  };

  const toggleFavoriteImage = (index) => {
    setFavoriteImageIndex(index);
  };

  const deleteImage = (index) => {
    const filteredImages = selectedImages.filter((_, i) => i !== index);
    setSelectedImages(filteredImages);
    if (favoriteImageIndex === index) {
      setFavoriteImageIndex(0);
    }
  };

  const renderImage = (image, index) => {
    return (
      <TouchableOpacity key={index} onPress={() => toggleFavoriteImage(index)}>
        <Image source={{ uri: image.path }} style={[styles.image, index === favoriteImageIndex && styles.favoriteImage]} />
        <TouchableOpacity style={styles.deleteButton} onPress={() => deleteImage(index)}>
          <Text style={styles.deleteButtonText}>X</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
    <View style={styles.container}>
   
       <TouchableOpacity style={styles.inputContainer} onPress={pickImage}>
        <Icon name="plus" style={styles.iconEdit} />
      </TouchableOpacity>
      
      {selectedImages.map((image, index) => renderImage(image, index))}
      <View style={{width:350,paddingTop:10}}>
      <Button text="agregar" IconName="done" Link={() => navigation.goBack()}/>
      </View>
     
    </View>
    {/* <Check/> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  iconEdit: {
    color: 'black',
    fontSize: 45,
   
  },
  container: {
    alignItems: 'center',
    marginTop: 20,
    flexDirection:'row',
    alignItems:'center',
    flexWrap: 'wrap',
    paddingHorizontal:14
  },
  inputContainer: {
    marginTop: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.07)',
    borderRadius: 15,
    alignItems:'center',
    justifyContent:'center',
    height: 110,
    width: 110,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',

  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  image: {
    width: 110,
    height: 100,
    margin: 5,
  },
  favoriteImage: {
    borderColor: 'blue',
    borderWidth: 2,
  },
  deleteButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'red',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButtonText: {
    color: 'white',
  },
});

export default ImagePickerInput;
// import React, { useState } from 'react';
// import { View, TouchableOpacity, Text, Image, TextInput } from 'react-native';
// import ImagePicker from 'react-native-image-crop-picker';

// const SoccerForm = ({ addSoccer }) => {
//   const [name, setName] = useState('');
//   const [timing, setTiming] = useState('');
//   const [imageUri, setImageUri] = useState(null);

//   const handleImagePicker = () => {
//     ImagePicker.openPicker({
//       width: 300,
//       height: 400,
//       cropping: true
//     }).then(image => {
//       setImageUri(image.path);
//     }).catch(error => {
//       console.log('ImagePicker Error: ', error);
//     });
//   };

//   const handleAddSoccer = () => {
//     const soccerData = { name, timing, imageUri };
//     addSoccer(soccerData);
//     setName('');
//     setTiming('');
//     setImageUri(null);
//   };

//   return (
//     <View>
//       <TextInput
//         placeholder="Name"
//         value={name}
//         onChangeText={setName}
//       />
//       <TextInput
//         placeholder="Timing"
//         value={timing}
//         onChangeText={setTiming}
//       />
//       <TouchableOpacity onPress={handleImagePicker}>
//         <Text>Select Image</Text>
//       </TouchableOpacity>
//       {imageUri && <Image source={{ uri: imageUri }} style={{ width: 100, height: 100 }} />}
//       <TouchableOpacity onPress={handleAddSoccer}>
//         <Text>Add Soccer</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default SoccerForm;
