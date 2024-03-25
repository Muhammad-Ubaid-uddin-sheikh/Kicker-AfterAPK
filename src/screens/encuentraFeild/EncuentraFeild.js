import React, { useEffect } from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View, TextInput, Alert } from 'react-native'
import MatchPlayerDetails from '../../components/MatchesPlayerDetails'
import { Fonts } from '../style'
import Icons from 'react-native-vector-icons/Ionicons'
import SearchICon from 'react-native-vector-icons/EvilIcons'
import ClockICon from 'react-native-vector-icons/AntDesign'
const FindGames = ({ navigation }) => {
    useEffect(()=>{
        Alert.alert('This app is still under development and not yet complete.')
          },[])
    return (

        <ScrollView style={styles.form} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
            <View style={styles.MainContainer}>

                {/* <StatusBar translucent={true} backgroundColor={'transparent'} /> */}
                <View style={styles.rowContainer}>
                    <View style={styles.searchbarContainer}>
                        <Icons name='location-outline' style={styles.Searchicon} size={25} />
                        <TextInput
                            style={styles.input}
                            placeholder="Ubicación"

                            placeholderTextColor="rgba(33, 33, 33, 0.60)"
                        />
                    </View>
                    <View style={styles.flexPropertyInput}>
                        <View style={styles.ColmInput}>
                            <View style={styles.searchbarContainer}>
                                <SearchICon name='search' style={styles.Searchicon} size={25} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Tipo de partido"

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
                    <Text style={styles.MainHeading}>Partidos ocurriendo cerca de ti</Text>

                    <View style={[styles.MainGroundContainer, { paddingTop: 10 }]} >
                        {/* <TouchableOpacity onPress={() => navigation.navigate('ParticularGroundScreen')}> */}
                            <MatchPlayerDetails />
                        {/* </TouchableOpacity> */}
                        <View style={styles.GroundContainer}>
                            <Text style={styles.Groundname}>Arsenal Vs Chelsea</Text>
                            <Text style={styles.DistanceTExt}>300m away</Text></View>
                    </View>

                    <View style={styles.MainGroundContainer} >
                        <MatchPlayerDetails />
                        <View style={styles.GroundContainer}>
                            <Text style={styles.Groundname}>Madrid Vs ?</Text>
                            <Text style={styles.DistanceTExt}>500m away</Text></View>
                    </View>

                    <View style={styles.MainGroundContainer} >
                        <MatchPlayerDetails />
                        <View style={styles.GroundContainer}>
                            <Text style={styles.Groundname}>Arsenal Vs Chelsea</Text>
                            <Text style={styles.DistanceTExt}>1200m away</Text></View>
                    </View>

                    <View style={styles.MainGroundContainer} >
                        <MatchPlayerDetails />
                        <View style={styles.GroundContainer}>
                            <Text style={styles.Groundname}>Arsenal Vs Chelsea</Text>
                            <Text style={styles.DistanceTExt}>1300m away</Text></View>
                    </View>

                    <View style={styles.MainGroundContainer} >
                        <MatchPlayerDetails />
                        <View style={styles.GroundContainer}>
                            <Text style={styles.Groundname}>Arsenal Vs Chelsea</Text>
                            <Text style={styles.DistanceTExt}>300m away</Text></View>
                    </View>
                </View>
            </View>
        </ScrollView>



    )
}
const styles = StyleSheet.create({
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

        paddingBottom: 15
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
        paddingBottom: 20,

    },
    form: {
        backgroundColor: '#fff',
        display: 'flex',
        width: 'auto',

        position: 'relative',
        paddingTop: 10,
        height: 'auto',
        paddingBottom: 20


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