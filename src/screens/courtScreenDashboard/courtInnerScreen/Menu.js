// import React from 'react'
// import { Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
// import { Fonts } from '../../style';
// import Icons from 'react-native-vector-icons/EvilIcons'
// // import TodoGround from './todoGroud/TodoGround'
// import ReservaFeild from '../../reservaFeild/ReservaFeild'
// const Clender = ({navigation}) => {
//   return (
//     <View style={styles.MainContainer}>
//  <View style={styles.inputMainContainner}>
//                         <View style={styles.searchbarContainer}>
//                             <Icons name='search' style={styles.Searchicon} size={30} />
//                             <TextInput
//                                 style={styles.input}
//                                 placeholder="Tipo de superficie, nombre"
//                                 placeholderTextColor="rgba(33, 33, 33, 0.60)"
//                             />
//                         </View>
//                         <View style={styles.divaddButton}>
//                         <Text style={styles.buttonTextHeading}>Tus canchas</Text>
// <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CourtDetails')}>
//               <Text style={styles.buttonText}>Añadir cancha</Text>
//             </TouchableOpacity>
// </View>
//                         {/* <FlatList
//                             data={filteredCountries}
//                             renderItem={renderItem}
//                             keyExtractor={(item) => item.cca3}
//                         /> */}

//                     </View>
//                     <ReservaFeild/>
//                     {/* <TodoGround/> */}
//     <View >
//         <Text style={styles.textHeading}>Filtrar por fecha</Text>
//     </View>
//     </View>
//   )
// }
// const styles= StyleSheet.create({

//     textHeading: {
//         fontSize: 20,
//         color: '#000',
//         marginTop: 20,
//         fontFamily: Fonts.BOLD,
//         marginLeft:20,
        
       
//     },
//     MainContainer:{
//         width:'auto',
//         backgroundColor:'white',
//         flex:1,
       
//     },
//     buttonContainer:{
//       marginTop:10
//     },
//     Searchicon: {
//       position: 'absolute',
//       top: 27,
//       left: 10,
//       color: 'black'
//   },
//   input: {
//       marginTop: 12,
//       paddingLeft: 42,
//       padding: 16,
//       marginBottom: 10,
//       paddingRight: 40,
//       fontSize: 14,
//       lineHeight: 20,
//       width: 360,
//       borderRadius: 12,
//       borderWidth: 0.25,
//       borderColor: 'rgba(0, 0, 0, 0.25)',
//       shadowOffset: { width: 0, height: 1 },
//       shadowRadius: 2,
//       shadowOpacity: 1,
//       color: '#212121',
//       fontFamily: Fonts.BOLD,
//       backgroundColor: 'rgba(64, 134, 57, 0.05)',

//   },
//   searchbarContainer: {
//       position: 'relative',
//       width: 360,
//       flexDirection: 'row',
//       marginLeft: 0
//   },
//   inputMainContainner: {
//       paddingLeft:15,
//       paddingTop:5
//   },
//   divaddButton:{
// flexDirection:'row',
// justifyContent:'space-between'
//   },
//   buttonTextHeading:{
//     fontSize: 20,
//     color: '#000',
//     fontFamily: Fonts.BOLD,
//     paddingLeft:5
//   },
//   button:{
//     marginRight:25,
//     backgroundColor:'rgba(64, 134, 57, 0.15)',
//     borderRadius:42,
//     borderColor:'rgba(64, 134, 57, 0.25)',
//     borderWidth:0.5,
//     paddingTop:5,
//     paddingBottom:5,
//     paddingRight:10,
//     paddingLeft:10
//   },
//   buttonText:{
//     color:'#408639',
//     fontFamily:Fonts.REGULAR,
//     fontSize:12
//   }
// })
// export default Clender
import React, { useState } from 'react';
import { ScrollView, StatusBar, Image, StyleSheet, Text, TouchableOpacity, View, TextInput, FlatList, } from 'react-native'
import SearchICon from 'react-native-vector-icons/EvilIcons'
import { Fonts } from '../../style';
const FindGames = ({ navigation }) => {
    const [searchText, setSearchText] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const data = [
        { id: 1, name: 'Jefferson Parkasdasd', rating: '4.5', available: true, address: 'E. 112th St & First Ave', source: 'https://global-uploads.webflow.com/5ca5fe687e34be0992df1fbe/61b5911c9d37d0449acee390_soccer-ball-on-grass-in-corner-kick-position-on-so-2021-08-29-10-46-54-utc-min.jpg' },
        { id: 2, name: 'Ben Vitale Fieldsasdas', rating: '4.8', available: false, address: 'D. 112th St & First Ave', source: 'https://en.reformsports.com/oxegrebi/2023/07/why-do-they-sprinkle-football-pitches.jpg' },
        { id: 3, name: 'Ground 3', rating: '4.2', available: true, address: 'F. 112th St & First Ave', source: 'https://c4.wallpaperflare.com/wallpaper/892/527/605/football-pitch-wallpaper-preview.jpg' },
        { id: 4, name: 'Ground 4', rating: '4.2', available: true, address: 'F. 112th St & First Ave', source: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vdGJhbGwlMjBzdGFkaXVtfGVufDB8fDB8fHww' },
        { id: 5, name: 'Ground 5', rating: '4.2', available: true, address: 'F. 112th St & First Aase', source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdyk2rqCaUDs1ygXLLxjlymyBGe-fZtvZtqVTdAdpsq4eeyRjPRtbGKS4OgFMAXug10vI&usqp=CAU' },
        { id: 6, name: 'Ground 6', rating: '4.2', available: true, address: 'F. 112th St & First Aveaaa', source: 'https://www.pommietravels.com/wp-content/uploads/2023/11/camp-nou-spain.jpg' },
        { id: 7, name: 'Ground 7', rating: '4.2', available: true, address: 'F. 112th St & First Aveasdas', source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWtrdH13yvwwmZ5rcStztHz8lfEPyft5SAH5nBAYqjzBQVi9S4MN0LhCaWb2gZQvk02lY&usqp=CAU' },

        // Add more data as needed
    ];
    const handleItemClick = (item) => {
        navigation.navigate('ParticularCourtGround', { item });

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
            <Image source={{ uri: item.source }} style={{ width: 355, height: 170, borderRadius: 15, objectFit: 'cover' }} />
            <View style={styles.TextContainerImage}>
                <Text style={styles.GroundName}>{item.name}</Text>
                <View style={styles.locationTextContainer}>
                  <Image source={require('../../../assets/AvalibleIcon.png')} style={{width:16,height:16,objectFit:'contain',paddingRight:25}} />
                <Text style={[styles.availability, { color: '#454545', }]}>
                    {item.available ? 'Disponible' : 'No disponible'}
                </Text>
                </View>
                {/* <Text style={styles.GroundPrice}>{item.available}</Text> */}
            </View>
            <View style={styles.locationTextContainer}>
                {/* <LocationIcon name='location-dot' style={{ color: '#408639' }} size={15} /> */}
                {/* <Text style={styles.textLocation}> {item.address}</Text>
                <StarIcons name='star' style={{ color: '#FCC767', marginLeft: 10 }} size={12} /> */}
                {/* <Text style={styles.textLocation}> {item.rating}</Text> */}
            </View>
        </TouchableOpacity>
    );

    return (

        <View style={styles.form}>
            {/* <StatusBar translucent={true} backgroundColor={'transparent'} /> */}
            <View style={styles.MainContainer}>
                <View style={styles.rowContainer}>
                    {/* Your other components */}

                    <View style={styles.searchbarContainer}>
                        <SearchICon name='search' style={styles.Searchicon} size={30} />
                        <TextInput
                            style={styles.input}
                            placeholder="Tipo de superficie, nombre"

                            placeholderTextColor="rgba(33, 33, 33, 0.60)"
                            onChangeText={handleSearch}
                            value={searchText}
                        />
                    </View>
                    {/* <View style={styles.flexPropertyInput}>
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
                        </View> */}


                    {/* </View> */}
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={styles.MainHeading}>Tus canchas</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CourtDetails')}>
              <Text style={styles.buttonText}>Añadir cancha</Text>
            </TouchableOpacity>
                    </View>
                    

                    <View style={{height:600, paddingTop: 20,paddingBottom:40 }}>

                        <FlatList
                               showsVerticalScrollIndicator={false}
                            data={searchText ? filteredData : data}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id.toString()}
                            contentContainerStyle={{ flexGrow: 1, paddingBottom: 10, }}
                        />
                    </View>
                </View>
            </View>
        </View>




    )
}
const styles = StyleSheet.create({
    GroundName: {
        fontSize: 17,
        color: 'black',
        letterSpacing: 0.1,
        lineHeight: 36,
        fontFamily: Fonts.MEDIUM,

        paddingTop: 2
    },
    TextContainerImage: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 3,
        paddingRight: 15
    },
    locationTextContainer: {
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: "center",
        paddingLeft: 3,

    },
    textLocation: {
        fontSize: 14,
        fontFamily: Fonts.REGULAR,
        color: '#A0A0A0',
        alignItems: 'center',
        flexDirection: 'row'
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
        flex: 1,
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

    },
    form: {
        backgroundColor: 'white',
        flex: 1,
        position: 'relative',
        paddingBottom: 10
    },
    Searchicon: {
        position: 'absolute',
        top: 18,
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
      button:{
    marginRight:5,
    backgroundColor:'rgba(64, 134, 57, 0.15)',
    borderRadius:42,
    borderColor:'rgba(64, 134, 57, 0.25)',
    borderWidth:0.5,
    paddingTop:5,
    paddingBottom:5,
    paddingRight:10,
    paddingLeft:10
  },
  buttonText:{
    color:'#408639',
    fontFamily:Fonts.REGULAR,
    fontSize:12
  }
})

export default FindGames