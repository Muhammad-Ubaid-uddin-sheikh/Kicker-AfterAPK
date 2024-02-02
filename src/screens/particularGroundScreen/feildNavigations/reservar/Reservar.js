import React, { useState } from 'react';
import { Text, View, StatusBar, StyleSheet,  ScrollView, } from 'react-native'
import { Fonts } from '../../../style';
import Button from '../../../../components/Button';
import Foot from '../../../setting/Foot'

const Dashboard = ({navigation}) => {
    
    // const [inputValue, setInputValue] = useState('');
    // const handleInputChange = (text) => {
    //     setInputValue(text);
    //   };
    const [loading, setLoading] = useState(false);
    const Hora = [
        {id:1, name:'1:00 PM'},
        {id:2, name:'1:30 PM'},
        {id:3, name:'2:00 PM'},
        {id:4, name:'2:30 PM'},
        {id:5, name:'3:00 PM'},
        {id:6, name:'3:30 PM'},
        {id:7, name:'4:00 PM'},
        {id:8, name:'4:30 PM'},
        {id:9, name:'5:00 PM'},
        {id:10, name:'5:30 PM'},
        {id:11, name:'6:00 PM'},
        {id:12, name:'6:30 PM'},
        {id:13, name:'7:00 PM'},
        
            ]
            const Finalizacion = [
                {id:1, name:'1:00 PM'},
                {id:2, name:'1:30 PM'},
                {id:3, name:'2:00 PM'},
                {id:4, name:'2:30 PM'},
                {id:5, name:'3:00 PM'},
                {id:6, name:'3:30 PM'},
                {id:7, name:'4:00 PM'},
                {id:8, name:'4:30 PM'},
                {id:9, name:'5:00 PM'},
                {id:10, name:'5:30 PM'},
                {id:11, name:'6:00 PM'},
                {id:12, name:'6:30 PM'},
                {id:13, name:'7:00 PM'},
                    ]

    const Fecha = [
{id:1, name:'(hoy) Octubre 14, 2024'},
{id:2, name:'(Mañana) Octubre 15, 2024'},
{id:3, name:' Octubre 16, 2024'}
    ]
    const Cancha = [
        { id: 1, name: 'Fútbol 7' },
        { id: 2, name: 'Fútbol 11' },
        { id: 3, name: 'Fútbol rápido' },
      ];
    const [iCanchavalVisible, setCanchavalVisible] = useState(false);
    const [iFechavalVisible, setFechavalVisible] = useState(false);
    const [HorainicioVisible, setHorainicioVisible] = useState(false);
    const [finalizacionVisible, finalizacionVisibleVisible] = useState(false);
    const [Canchaval, setCanchaval] = useState(null);
    const [Fechaval, setFechaval] = useState(null);
    const [Horainicio, setHorainicio] = useState(null);
    const [finalizacion, setfinalizacion] = useState(null);
    const handleSelectFirst = item => {
        setCanchaval(item);
        setCanchavalVisible(false);
      };
      const handleSelectSecond = item => {
        setFechaval(item);
        setFechavalVisible(false);
      };
      const handleSelectThird = item => {
        setHorainicio(item);
        setHorainicioVisible(false);
      };
      const handleSelectFourth = item => {
        setfinalizacion(item);
        finalizacionVisibleVisible(false);
      };
      const handleNavigate = () => {
        setLoading(true);
        setTimeout(() => {
            navigation.navigate('Paymnet',{Canchaval,Fechaval,Horainicio,finalizacion});
            setLoading(false);
          }, 2000);
       
       };
    //    { inputData: inputValue },
 
    return (

        <View style={styles.MainContainer}>
            <ScrollView style={styles.scrollEdit} backgroundColor={'white'}>
                <View style={styles.rowContainer}>
                    <StatusBar backgroundColor={'white'} barStyle="dark-content" />
                    <Text style={styles.paragraphs}>
                        Detalles de reserva
                    </Text>



                </View>


                <View style={[styles.inputContainer, { paddingTop: 10 }]}>
                {/* <TextInput
        value={inputValue}
        onChangeText={handleInputChange}
        placeholder="Enter data"
      /> */}
                    <Foot visible={iCanchavalVisible}
                   selectedValue={Canchaval ? Canchaval.name : ''}
                    PopupOn={()=>setCanchavalVisible(true)}
        onClose={() => setCanchavalVisible(false)}
         onSelect={handleSelectFirst} options={Cancha} placeHolder="Cancha" />
                </View>
                <View style={styles.inputContainer}>

                <Foot visible={iFechavalVisible}
                   selectedValue={Fechaval ? Fechaval.name : ''}
                    PopupOn={()=>setFechavalVisible(true)}
        onClose={() => setFechavalVisible(false)}
         onSelect={handleSelectSecond} options={Fecha} placeHolder="Fecha" />
                
                </View>
                <View style={styles.inputContainer}>

                <Foot visible={HorainicioVisible}
                   selectedValue={Horainicio ? Horainicio.name : ''}
                    PopupOn={()=>setHorainicioVisible(true)}
        onClose={() => setHorainicioVisible(false)}
         onSelect={handleSelectThird} options={Hora} placeHolder="Hora de inicio" />
                
                </View>
                <View style={styles.inputContainer}>

                <Foot visible={finalizacionVisible}
                   selectedValue={finalizacion ? finalizacion.name : ''}
                    PopupOn={()=>finalizacionVisibleVisible(true)}
        onClose={() => finalizacionVisibleVisible(false)}
         onSelect={handleSelectFourth} options={Finalizacion} placeHolder="Hora de finalización" />
                
                </View>
               

            </ScrollView>
            <View style={styles.nextButton}>
                
                <Button loading={loading} text="Reservar" Link={handleNavigate} />
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    inputContainer: {
        position: 'relative',
        marginBottom: 10,
        // width: 345,
        marginLeft: 15,
        marginRight: 20,


    },
    scrollcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 5
    },

    row: {
        flexDirection: 'row', // Arrange points and text horizontally
        alignItems: 'center', // Center content vertically
        justifyContent: 'space-between'
    },


    MainContainer: {
        backgroundColor: 'white',
        // flexGrow: 1,
        height: "100%"


    },

    paragraphs: {
        fontSize: 18,
        color: 'black',
        letterSpacing: 0.1,
        //   width:'auto',
        lineHeight: 36,
        fontFamily: Fonts.BOLD,
        paddingLeft: 15,
        paddingRight: 10,
        paddingTop: 15
    },
    nextButton: {
        // position: 'absolute',
        // bottom: -20,
        marginBottom: 20,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: 'white'
    },

})

export default Dashboard