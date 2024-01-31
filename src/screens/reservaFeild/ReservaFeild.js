import React, { useState } from 'react';
import { ScrollView, StatusBar,Image, StyleSheet, Text, TouchableOpacity, View, TextInput,FlatList ,} from 'react-native'
import MatchPlayerDetails from '../../components/MatchesPlayerDetails'
import { Fonts } from '../style'
import Icons from 'react-native-vector-icons/Ionicons'
import SearchICon from 'react-native-vector-icons/EvilIcons'
import ClockICon from 'react-native-vector-icons/AntDesign'
import LocationIcon from 'react-native-vector-icons/FontAwesome6'
import StarIcons from 'react-native-vector-icons/Fontisto'
const FindGames = ({ navigation  }) => {
    const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const data = [
    { id: 1, name: 'Jefferson Park', rating:'4.5', available: true, address: 'E. 112th St & First Ave', source: 'https://global-uploads.webflow.com/5ca5fe687e34be0992df1fbe/61b5911c9d37d0449acee390_soccer-ball-on-grass-in-corner-kick-position-on-so-2021-08-29-10-46-54-utc-min.jpg' },
    { id: 2, name: 'Ben Vitale Fields', rating:'4.8' , available: false , address: 'D. 112th St & First Ave', source: 'https://en.reformsports.com/oxegrebi/2023/07/why-do-they-sprinkle-football-pitches.jpg' },
    { id: 3, name: 'Ground 3', rating:'4.2' , available: true, address: 'F. 112th St & First Ave',source: 'https://c4.wallpaperflare.com/wallpaper/892/527/605/football-pitch-wallpaper-preview.jpg' },
    { id: 4, name: 'Ground 4', rating:'4.2' , available: true, address: 'F. 112th St & First Ave',source: 'https://c4.wallpaperflare.com/wallpaper/892/527/605/football-pitch-wallpaper-preview.jpg' },
    // Add more data as needed
  ];
  const handleItemClick = (item) => {
    navigation.navigate('ParticularGroundScreen', { item });
    
  };
  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = data.filter(
      (item) =>
        item.name.toLowerCase().includes(text.toLowerCase()) ||
        item.address.toString().includes(text)
    );
    setFilteredData(filtered);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleItemClick(item)} style={{ marginBottom: 20 }}>
      <Image source={{ uri: item.source }} style={{ width: 355, height: 170,borderRadius:15,objectFit:'cover' }} />
      <View style={styles.TextContainerImage}>
      <Text style={styles.GroundName}>{item.name}</Text>
      <Text style={[styles.availability, { color: item.available ? 'green' : '#A0A0A0' }]}>
                        {item.available ? 'Disponible' : 'No disponible'}
                    </Text>
      {/* <Text style={styles.GroundPrice}>{item.available}</Text> */}
      </View>
      <View style={styles.locationTextContainer}>
<LocationIcon name='location-dot' style={{color:'#408639'}} size={15} />
<Text style={styles.textLocation}> {item.address}</Text>
<StarIcons name='star' style={{color:'#FCC767',marginLeft:10}} size={12} />
<Text style={styles.textLocation}> {item.rating}</Text>
</View>
    </TouchableOpacity>
  );

    return (

        <View style={styles.form}>
        <StatusBar translucent={true} backgroundColor={'transparent'} />
        <View style={styles.MainContainer}>
            <View style={styles.rowContainer}>
                {/* Your other components */}

                <View style={styles.searchbarContainer}>
                        <Icons name='location-outline' style={styles.Searchicon} size={25} />
                    <TextInput
                            style={styles.input}
                            placeholder="Ubicación"

                            placeholderTextColor="rgba(33, 33, 33, 0.60)"
                            onChangeText={handleSearch}
                            value={searchText}
                        />
                    </View>
                    <View style={styles.flexPropertyInput}>
                        <View style={styles.ColmInput}>
                            <View style={styles.searchbarContainer}>
                                <SearchICon name='search' style={styles.Searchicon} size={25} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Tipo de cancha"

                                    placeholderTextColor="rgba(33, 33, 33, 0.60)"
                                />
                            </View>
                        </View>
                        <View style={styles.ColmInput}>
                            <View style={styles.searchbarContainer}>
                                <ClockICon name='clockcircleo' style={[styles.Searchicon, { top: 23 }]} size={18} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Hora"
                                    // value={searchText}
                                    // onChangeText={handleSearch}
                                    placeholderTextColor="rgba(33, 33, 33, 0.60)"
                                />
                            </View>
                        </View>


                    </View>
                    <Text style={styles.MainHeading}>Canchas cercanas</Text>

                <View style={{height:520,  alignItems: 'center', justifyContent: 'center' ,paddingTop:20}}>
                    
                    <FlatList
                   
                    showsVerticalScrollIndicator={false}
                        data={searchText ? filteredData : data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                        contentContainerStyle={{ flexGrow: 1, paddingBottom: 10,  }}
                    />
                </View>
            </View>
        </View>
    </View>
   



    )
}
const styles = StyleSheet.create({
    GroundName:{
        fontSize: 17,
    color: 'black',
    letterSpacing: 0.1,
    lineHeight: 36,
    fontFamily: Fonts.MEDIUM,
   
    paddingTop: 2
    },
    TextContainerImage:{
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems:"center",
        paddingLeft: 3,
        paddingRight:15
    },
    locationTextContainer:{
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems:"center",
        paddingLeft: 3,
      
      },
      textLocation:{
        fontSize:14,
        fontFamily:Fonts.REGULAR,
        color:'#A0A0A0',
        alignItems:'center',
        flexDirection:'row'
      },
    ColmInput: {
        width: "50%",

    },
    flexPropertyInput: {
        flexDirection: 'row', // Arrange points and text horizontally
        alignItems: 'center', // Center content vertically
        justifyContent: 'space-between',
        gap: 10,
        //    paddingLeft:10,
        paddingRight: 10
    },
    MainHeading: {
        fontSize: 19,
        color: '#212121',
        letterSpacing: 0.8,
        width: 'auto',
        marginTop: 10,
        fontFamily: Fonts.BOLD,
        marginLeft: 2,

    },
    MainGroundContainer: {
flex:1,
        // paddingBottom: 15
    },
    GroundContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'flex-start',
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 10
    },
    Groundname: {
        fontSize: 16,
        color: '#61646B',
        fontFamily: Fonts.MEDIUM,
    },
    DistanceTExt: {
        fontFamily: 'Satoshi-Medium',
        fontSize: 14,
        color: '#AFB1B6'

    },

    MainContainer: {
        width: 'auto',
        backgroundColor: 'white',
        flex: 1,
        paddingLeft: 15,
        paddingRight: 20,
        // paddingBottom: 20,

    },
    form: {
        backgroundColor: '#fff',
        flex:1,

        position: 'relative',
        // height: 'auto',
        paddingBottom: 10


    },
    Searchicon: {
        position: 'absolute',
        top: 20,
        left: 10,
        color: 'rgba(33, 33, 33, 1)',

    },
    input: {
        marginTop: 2,
        paddingLeft: 40,
        padding: 16,
        marginBottom: 10,
        paddingRight: 10,
        fontSize: 14,
        lineHeight: 20,
        width: '100%',
        borderRadius: 12,
        borderWidth: 0.25,
        borderColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
        shadowOpacity: 1,
        color: '#212121',
        fontFamily: 'Satoshi-Medium',
        backgroundColor: 'rgba(64, 134, 57, 0.05)',

    },
    searchbarContainer: {
        position: 'relative',
        width: 'auto',
        flexDirection: 'row',
        marginLeft: 0
    },
})

export default FindGames