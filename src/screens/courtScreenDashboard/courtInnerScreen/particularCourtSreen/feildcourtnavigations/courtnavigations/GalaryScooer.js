import React, { useState } from 'react';
import { View, FlatList, Image, Text, Dimensions, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Fonts } from '../../../../../style';


const Gallery = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const images = [
    { id: '1', source: 'https://global-uploads.webflow.com/5ca5fe687e34be0992df1fbe/61b5911c9d37d0449acee390_soccer-ball-on-grass-in-corner-kick-position-on-so-2021-08-29-10-46-54-utc-min.jpg', },
    { id: '2', source: 'https://en.reformsports.com/oxegrebi/2023/07/why-do-they-sprinkle-football-pitches.jpg',  },
    { id: '3', source: 'https://c4.wallpaperflare.com/wallpaper/892/527/605/football-pitch-wallpaper-preview.jpg',},
    { id: '4', source: 'https://5.imimg.com/data5/XM/YM/JY/SELLER-54500078/football-ground-flooring.jpg',  },
    // Add more images as needed
  ];

  const handleImagePress = (index) => {
    setSelectedImageIndex(index);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={images}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => handleImagePress(index)}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.source }} style={styles.imageThumbnail} />
              <Text style={styles.imageText}>{item.text}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <Modal visible={modalVisible} transparent>
        <ScrollView
          contentContainerStyle={styles.modalContainer}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={(event) => {
            const page = Math.round(event.nativeEvent.contentOffset.x / Dimensions.get('window').width);
            setSelectedImageIndex(page);
          }}
        >
          {images.map((image, index) => (
            <TouchableOpacity key={image.id} onPress={() => setModalVisible(false)}>
              <Image source={{ uri: image.source }} style={styles.modalImage} />
              {/* <Text style={styles.modalText}>{image.text}</Text> */}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  imageContainer: {
    alignItems: 'center',
  },
  imageThumbnail: {
    width: 200,
    height: 120,
    margin: 10,
    borderRadius:15
  },
  imageText: {
    fontSize: 14,
    textAlign:'left',
    color: '#2F2F2F',
    fontFamily:Fonts.MEDIUM,
    justifyContent:'flex-start'
  },
  modalContainer: {
    flexGrow: 1,
    justifyContent:'flex-start',
    // justifyContent: 'left',
    // alignItems: 'left',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    
  },
  modalImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    resizeMode: 'contain',
  },
  modalText: {
    fontSize: 16,
    color: '#2F2F2F',
    justifyContent:'flex-start',
    textAlign:'left',
    marginTop: 10,
  },
});

export default Gallery;
