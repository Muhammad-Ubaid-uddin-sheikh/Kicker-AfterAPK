
import React from 'react'
import { View, StyleSheet, StatusBar, Text, Image,Alert, Share, Platform } from 'react-native'
import { Fonts } from '../../style'
import ButtonslipAndcencel from '../../../components/ButtonslipAndcencel'
const CustomizeProfile = ({ route }) => {

    const { Canchaval } = route.params
    const { Fechaval } = route.params
    const { Horainicio } = route.params
    const { finalizacion } = route.params
    // const { item } = route.params;

    
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'white'} barStyle="dark-content" />
            <View style={styles.mainContainerSlip}>
                <Image
                    source={require('../../../assets/Ground.jpg')}
                    style={styles.backgroundImage}
                />
                <Text style={styles.GroundName}>
                    Jefferson Park
                </Text>
                <View style={styles.rowGroundDetails}>
                    <View>
                        <Text style={styles.profileHeading}>Nombre</Text>
                        <Text style={styles.headingTitle}>Jake Garcia </Text>
                    </View>
                    <View>
                        <Text style={styles.profileHeading}>Fecha</Text>
                        <Text style={styles.headingTitle}>{Fechaval ? Fechaval.name : 'None'}</Text>
                    </View>

                </View>
                <View style={styles.rowGroundDetails}>
                    <View>
                        <Text style={styles.profileHeading}>Hora de inicio</Text>
                        <Text style={styles.headingTitle}>{Horainicio ? Horainicio.name : 'None'} </Text>
                    </View>
                    <View>
                        <Text style={styles.profileHeading}>Hora de finalización</Text>
                        <Text style={styles.headingTitle}>{finalizacion ? finalizacion.name : 'None'} </Text>
                    </View>

                </View>
                <View style={styles.rowGroundDetails}>
                    <View>
                        <Text style={styles.profileHeading}>Cancha</Text>
                        <Text style={styles.headingTitle}>{Canchaval ? Canchaval.name : 'None'} </Text>
                    </View>
                    <View>
                        <Text style={styles.profileHeading}>Pago</Text>
                        <Text style={styles.headingTitle}>Completado </Text>
                    </View>

                </View>
            
            </View>
            <View style={styles.nextButton}>
                <View style={{marginBottom:10}}> 
                <ButtonslipAndcencel ColorIcon='white'IconColor="#212121" ColorText="#212121" IconName="share" text="Compartir detalles" Link={()=>navigation.navigate('Discovery')} />
                </View>
           
                <ButtonslipAndcencel   IconName="save-alt" text="Guardar recibo"  />
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    nextButton: {
        position:'absolute',
        bottom: 25,
        width:340
    },
    headingTitle: {
        fontFamily: Fonts.MEDIUM,
        color: "#212121",
        letterSpacing: 0.2,
        fontSize: 16,
        paddingLeft: 3,
        paddingTop:5,
        width:150,
    },
    profileHeading: {
        fontFamily: Fonts.REGULAR,
        color: "#787878",
        letterSpacing: 0.2,
        fontSize: 14.5,
        paddingTop: 10,
        paddingLeft:3,
        width:150,
        flexWrap: 'wrap',
    },
    mainContainerSlip: {
        backgroundColor: 'rgba(64, 134, 57, 0.05)',
        // box-shadow: '0 4 60px 0px rgba(4, 6, 15, 0.05)'
        padding: 15,
        borderRadius: 16,
        borderColor: 'rgba(0, 0, 0, 0.25)',
        borderWidth: 0.5,
    },

    rowGroundDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10
    },
    /* Card/Shadow 2 */
    GroundName: {
        fontFamily: Fonts.MEDIUM,
        color: "#212121",
        letterSpacing: 0.2,
        fontSize: 19,
        paddingTop: 10,
        paddingLeft: 5
    },
    backgroundImage: {
        width: 320,
        height: 200,
        objectFit: 'cover',
        borderRadius: 16,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',

    },



});

export default CustomizeProfile