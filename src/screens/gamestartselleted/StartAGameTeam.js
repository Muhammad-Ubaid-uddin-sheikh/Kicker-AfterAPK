import React, { useState } from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import ButtonslipAndcencel from '../../components/ButtonslipAndcencel'
import { Fonts } from '../style'
import Button from '../../components/Button';
import { useSelector } from 'react-redux';
import Foot from '../setting/Foot'
const FindGames = ({ navigation }) => {
    const userData = useSelector(state => state.team);
    const [loading, setLoading] = useState(false);
    const handleNavigate = () => {
        navigation.navigate('GameStart')
    }
    const Cancha = [
        { id: 1, name: 'Fútbol 7' },
        { id: 2, name: 'Fútbol 11' },
        { id: 3, name: 'Fútbol rápido' },
    ];
    const [iCanchavalVisible, setCanchavalVisible] = useState(false);
    const [Canchaval, setCanchaval] = useState(null);
    const handleSelectFirst = item => {
        setCanchaval(item);
        setCanchavalVisible(false);
    };
    return (


        <View style={styles.MainContainer}>
           <StatusBar backgroundColor={'white'}  barStyle="dark-content" />
            <View style={styles.rowContainer}>

                <Text style={styles.headingMain}>
                    Comienza un partido
                </Text>
                <ScrollView style={[styles.form,]} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>

               
                <Text >
                    {/* {userData.selected} */}
                    Detalles de partido</Text>
                <View style={[styles.inputContainer, { paddingTop: 10 }]}>
                    <Foot visible={iCanchavalVisible}
                        selectedValue={Canchaval ? Canchaval.name : ''}
                        PopupOn={() => setCanchavalVisible(true)}
                        onClose={() => setCanchavalVisible(false)}
                        onSelect={handleSelectFirst} options={Cancha} placeHolder="Cancha" />
                </View>
                <View style={[styles.inputContainer,]}>
                    <Foot visible={iCanchavalVisible}
                        selectedValue={Canchaval ? Canchaval.name : ''}
                        PopupOn={() => setCanchavalVisible(true)}
                        onClose={() => setCanchavalVisible(false)}
                        onSelect={handleSelectFirst} options={Cancha} placeHolder="Canchaasdas" />
                </View>
                <View style={[styles.inputContainer,]}>
                    <Foot visible={iCanchavalVisible}
                        selectedValue={Canchaval ? Canchaval.name : ''}
                        PopupOn={() => setCanchavalVisible(true)}
                        onClose={() => setCanchavalVisible(false)}
                        onSelect={handleSelectFirst} options={Cancha} placeHolder="Canchaasdas" />
                </View>
                <View style={[styles.inputContainer,]}>
                    <Foot visible={iCanchavalVisible}
                        selectedValue={Canchaval ? Canchaval.name : ''}
                        PopupOn={() => setCanchavalVisible(true)}
                        onClose={() => setCanchavalVisible(false)}
                        onSelect={handleSelectFirst} options={Cancha} placeHolder="Canchaasdas" />
                </View>
                <View style={[styles.inputContainer,]}>
                    <Foot visible={iCanchavalVisible}
                        selectedValue={Canchaval ? Canchaval.name : ''}
                        PopupOn={() => setCanchavalVisible(true)}
                        onClose={() => setCanchavalVisible(false)}
                        onSelect={handleSelectFirst} options={Cancha} placeHolder="Canchaasdas" />
                </View>
                <View style={[styles.inputContainer,]}>
                    <Foot visible={iCanchavalVisible}
                        selectedValue={Canchaval ? Canchaval.name : ''}
                        PopupOn={() => setCanchavalVisible(true)}
                        onClose={() => setCanchavalVisible(false)}
                        onSelect={handleSelectFirst} options={Cancha} placeHolder="Canchaasdas" />
                </View>
                </ScrollView>
            </View>
            <View style={styles.nextButton}>
                <View style={{marginBottom:10}}> 
                <ButtonslipAndcencel ColorIcon='white'IconColor="#212121" ColorText="#212121" IconName="clear" text="Cancelar" Link={()=>navigation.navigate('Discovery')} />
                </View>
           
                <Button text="Reservar una cancha" Link={handleNavigate} />
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    headingMain: {
        fontSize: 24,
        color: '#212121',
        letterSpacing: 0.2,
        width: 'auto',
        fontFamily: Fonts.BOLD,
        marginLeft: 2,
        textAlign: 'left',
        paddingBottom: 20,
        paddingTop: 20,
    },
    inputContainer: {
        position: 'relative',
        marginBottom: 10,
        width: 350,
    },
    MainHeading: {
        fontSize: 19,
        color: '#212121',
        letterSpacing: 0.2,
        width: 'auto',
        fontFamily: Fonts.BOLD,
        marginLeft: 2,
        textAlign: 'left'
    },
    MainContainer: {
        backgroundColor: 'white',
        flex: 1,
        // paddingLeft: 10,
        // paddingRight: 10,
        paddingBottom: 5,
        alignItems: 'center',
    },
    nextButton: {
        position: 'absolute',
        bottom: 25,
        width: 340,
    },
    form: {
        backgroundColor: '#fff',
        flex:1,
         position: 'relative',
         paddingTop: 15,
         paddingLeft:18,
         paddingRight:18,

    },
})

export default FindGames