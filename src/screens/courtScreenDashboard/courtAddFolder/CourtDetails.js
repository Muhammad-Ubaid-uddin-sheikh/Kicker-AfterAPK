
// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput,Alert} from 'react-native';
// import CustomInputFeild from '../../../components/inputFeildCustom'
// import Icons from 'react-native-vector-icons/MaterialIcons'
// import Buttons from '../../../components/Button';
// import { Fonts } from '../../style';
// import Display from './Display';
// import { useSelector } from 'react-redux';
// import Dot from 'react-native-vector-icons/Entypo';
// import Watch from 'react-native-vector-icons/Ionicons'
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// const API_URL = 'https://kickers-backend-5e360941484b.herokuapp.com/api/court/createCourtFields';
// const Sigup = ({ navigation }) => {
//   const soccerList = useSelector((state)=> state?.feild?.soccerList)
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [selectedDays, setSelectedDays] = useState([]);
//   const [openingHour, setOpeningHour] = useState('');
//   const [openingMinute, setOpeningMinute] = useState('');
//   const [openingPeriod, setOpeningPeriod] = useState('AM');
//   const [closingHour, setClosingHour] = useState('');
//   const [closingMinute, setClosingMinute] = useState('');
//   const [closingPeriod, setClosingPeriod] = useState('AM');
//   const [focusedIndex, setFocusedIndex] = useState(-1);
//   const handleFocus = (index) => {
//     setFocusedIndex(index);
// };

// const handleBlur = () => {
//     setFocusedIndex(-1);
// };

// const toggleDaySelection = (day) => {
//     const isSelected = selectedDays.includes(day);
//     if (isSelected) {
//         setSelectedDays(selectedDays.filter((selectedDay) => selectedDay !== day));
//     } else {
//         setSelectedDays([...selectedDays, day]);
//     }
// };

// const handleSave = () => {
//     if (
//         openingHour === '' ||
//         openingMinute === '' ||
//         closingHour === '' ||
//         closingMinute === ''
//       ) {
//         Alert.alert('Error', 'Please fill all fields');
//       } else {
       
//         const openingTime = `${openingHour.padStart(2, '0')}:${openingMinute.padStart(2, '0')} ${openingPeriod}`;
//         const closingTime = `${closingHour.padStart(2, '0')}:${closingMinute.padStart(2, '0')} ${closingPeriod}`;
//       }
// };
// const handleClear = () => {
//     setOpeningHour('');
//     setOpeningMinute('');
//     setOpeningPeriod('AM');
//     setClosingHour('');
//     setClosingMinute('');
//     setClosingPeriod('AM');
//     setSelectedDays([]);
// };
//   const [loading, setLoading] = useState(false);
// const [CourtName,setCourtName]= useState('')
// const [Location,setLocation]= useState('')
// const [Prices,setPrices]= useState('')

// const openingTime =  `${openingHour}:${openingMinute} ${openingPeriod}`
// const closingTime =  `${openingHour}:${openingMinute} ${openingPeriod}`
// const logData = () => {
//   if (
//     openingHour === '' ||
//     openingMinute === '' ||
//     closingHour === '' ||
//     closingMinute === '' ||
//     CourtName === '' ||
//     Location === '' ||
//     Prices === ''
//   ) {
//     Alert.alert('Error', 'Please fill all fields');
//   } else {

//   let payloay = {
//     name:CourtName,
//     location:Location,
//     Prices:Prices,
//     openingTime:openingTime,
//     fields:soccerList,
//     days: selectedDays,
//     closingTime: closingTime
//   }

//   navigation.navigate('AnalyticsScreen')
//   console.log("yyyasdasdyasdyasdyasdyasdyasdyasdyasdy", payloay);
// }
// };

// const handleNavigate = async () => {
//   // setLoading(true);
//   if ( openingHour === '' ||
//   openingMinute === '' ||
//   closingHour === '' ||
//   closingMinute === '' ||
//   CourtName === '' ||
//   Location === '' ||
//   Prices === '') {
//               Alert.alert('Incomplete Details', 'Please fill in all fields.');
          
//           }
          
//           else{
//               setLoading(true);
  
//   try {
//       const response = await axios.post(API_URL, {
//         ...payloay
//       });
//       if (response.data.status) {
//           const { accessTokenCourt, user } = response.data.data;
//           await AsyncStorage.setItem('accessTokenCourt', accessTokenCourt);
//           await AsyncStorage.setItem('user', JSON.stringify(user));
//         Alert.alert(JSON.stringify(response.data));
//         navigation.navigate('AnalyticsScreen');
//       }
//     } catch (error) {
      
//       Alert.alert(JSON.stringify(error.response));  
//     }
//     setTimeout(() => {

//       setLoading(false);
//     }, 2000);
//   }
// };



//   return (

//       <View style={[styles.inputContainer, { paddingTop: 0 }]}>
//         <ScrollView>
//         <CustomInputFeild focus={true} labelName='Nombre del tribunal' value={CourtName}
//          onChangeText={(text) => setCourtName( text)} 
//          />

// <CustomInputFeild focus={true} labelName='Ubicación' value={Location} onChangeText={(text) => setLocation(text)}/>
// {/* <View style={{paddingTop:10}}>
// <Foot visible={iCanchavalVisible}
//         selectedValue={Canchaval ? Canchaval.name : ''}
//          PopupOn={()=>setCanchavalVisible(true)}
// onClose={() => setCanchavalVisible(false)}
// onSelect={handleSelectFirst} options={Cancha} placeHolder="Duración de la sesión" />
// </View> */}
// <TouchableOpacity style={styles.buttonContainer} onPress={() => setShowDropdown(!showDropdown)}>
//           <View style={styles.textContainer}>
//             <Text style={styles.mainText}>Horarios</Text>
//             <Icons name="arrow-forward-ios" size={20} color="rgba(64, 134, 57, 1)" />
//           </View>
//         </TouchableOpacity>
//         {showDropdown &&
             
//         <View style={styles.mainContainerSlip}>
//                 <Text style={styles.TextHeading}>Día</Text>
//                 <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
//                     {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
//                         <TouchableOpacity
//                             key={day}
//                             onPress={() => toggleDaySelection(day)}
//                             style={[styles.WeekDays, {
//                                 backgroundColor: selectedDays.includes(day) ? '#408639' : 'rgba(33, 33, 33, 0.15)',
//                                 height: 35,
//                                 width: 35,
//                             }
//                             ]}
//                         >
//                             <Text style={[styles.WeekDaysText, { color: selectedDays.includes(day) ? 'white' : 'black' }]}>{day}</Text>
//                         </TouchableOpacity>
//                     ))}
//                 </View>

//                 <View style={{ marginBottom: 10 }}>
//                     <Text style={styles.TextHeading}>Hora de apertura</Text>
//                     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                         <View>
//                             <TextInput
//                                 placeholderTextColor='#212121'
//                                 backgroundColor="white"
//                                 placeholder="HH"
//                                 keyboardType="numeric"
//                                 maxLength={2}
//                                 value={openingHour}
//                                 onChangeText={(text) => setOpeningHour(text.replace(/[^0-9]/g, ''))}
//                                 onFocus={() => handleFocus(1)}
//                                 onBlur={handleBlur}
//                                 style={[
//                                     styles.inputfeildD,
//                                     { borderColor: focusedIndex === 1 ? '#212121' : 'white' },
//                                 ]}
//                             />
//                             <Text style={[styles.TextHeading, { paddingTop: 2 }]}>Hora</Text>
//                         </View>
//                         <View>
//                             <Dot name='dots-two-vertical' style={{ fontSize: 38, color: '#212121', width: 30, textAlign: 'center', paddingBottom: 30 }} />
//                         </View>
//                         <View>
//                             <TextInput
//                                 placeholder="MM"
//                                 keyboardType="numeric"
//                                 placeholderTextColor='#212121'
//                                 backgroundColor="white"
//                                 maxLength={2}
//                                 value={openingMinute}
//                                 onChangeText={(text) => setOpeningMinute(text.replace(/[^0-9]/g, ''))}
//                                 onFocus={() => handleFocus(2)}
//                                 onBlur={handleBlur}
//                                 style={[
//                                     styles.inputfeildD,
//                                     { borderColor: focusedIndex === 2 ? '#212121' : 'white' },
//                                 ]}
//                             />
//                             <Text style={[styles.TextHeading, { paddingTop: 2, paddingLeft: 10 }]}>Minuto</Text>
//                         </View>
//                         <View style={{ marginTop: -30 }}>
//                             <TouchableOpacity onPress={() => setOpeningPeriod('AM')} style={[styles.periodButton, { backgroundColor: openingPeriod === 'AM' ? 'black' : 'white' }]}>
//                                 <Text style={[styles.periodText, { color: openingPeriod === 'AM' ? 'white' : 'black' }]}>AM</Text>
//                             </TouchableOpacity>
//                             <TouchableOpacity onPress={() => setOpeningPeriod('PM')} style={[styles.periodButton, { backgroundColor: openingPeriod === 'PM' ? 'black' : 'white', borderBottomRightRadius: 5, borderBottomLeftRadius: 5, borderTopRightRadius: 0, borderTopLeftRadius: 0 }]}>
//                                 <Text style={[styles.periodText, { color: openingPeriod === 'PM' ? 'white' : 'black' }]}>PM</Text>
//                             </TouchableOpacity>
//                         </View>
//                     </View>
//                 </View>

//                 <View >
//                     <Text style={styles.TextHeading}>Horario de cierre</Text>
//                     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                         <View>
//                             <TextInput
//                                 placeholder="HH"
//                                 keyboardType="numeric"
//                                 placeholderTextColor='#212121'
//                                 backgroundColor="white"
//                                 maxLength={2}
//                                 value={closingHour}
//                                 onChangeText={(text) => setClosingHour(text.replace(/[^0-9]/g, ''))}
//                                 onFocus={() => handleFocus(3)}
//                                 onBlur={handleBlur}
//                                 style={[
//                                     styles.inputfeildD,
//                                     { borderColor: focusedIndex === 3 ? '#212121' : 'white' },
//                                 ]}
//                             />
//                             <Text style={[styles.TextHeading, { paddingTop: 2 }]}>Hora</Text>
//                         </View>
//                         <View>
//                             <Dot name='dots-two-vertical' style={{ fontSize: 38, color: '#212121', width: 30, textAlign: 'center', paddingBottom: 30 }} />
//                         </View>
//                         <View >
//                             <TextInput
//                                 placeholder="MM"
//                                 keyboardType="numeric"
//                                 placeholderTextColor='#212121'
//                                 backgroundColor="white"
//                                 maxLength={2}
//                                 value={closingMinute}
//                                 onChangeText={(text) => setClosingMinute(text.replace(/[^0-9]/g, ''))}
//                                 onFocus={() => handleFocus(4)}
//                                 onBlur={handleBlur}
//                                 style={[
//                                     styles.inputfeildD,
//                                     { borderColor: focusedIndex === 4 ? '#212121' : 'white' },
//                                 ]}
//                             />
//                             <Text style={[styles.TextHeading, { paddingTop: 2, paddingLeft: 10 }]}>Minuto</Text>
//                         </View>
//                         <View style={{ marginTop: -30 }}>
//                             <TouchableOpacity onPress={() => setClosingPeriod('AM')} style={[styles.periodButton, { backgroundColor: closingPeriod === 'AM' ? 'black' : 'white', }]}>
//                                 <Text style={[styles.periodText, { color: closingPeriod === 'AM' ? 'white' : 'black' }]}>AM</Text>
//                             </TouchableOpacity>
//                             <TouchableOpacity onPress={() => setClosingPeriod('PM')} style={[styles.periodButton, { backgroundColor: closingPeriod === 'PM' ? 'black' : 'white', borderBottomRightRadius: 5, borderBottomLeftRadius: 5, borderTopRightRadius: 0, borderTopLeftRadius: 0 }]}>
//                                 <Text style={[styles.periodText, { color: closingPeriod === 'PM' ? 'white' : 'black' }]}>PM</Text>
//                             </TouchableOpacity>
//                         </View>
//                     </View>
//                 </View >
//                 <View style={styles.buttonSetClear}>
//                     <Watch name="time-outline" style={{color:'black',fontSize:25}}/>
//                     <View style={{flexDirection:'row',justifyContent:"flex-end",alignItems:'center'}}>
//                     <TouchableOpacity onPress={handleClear} style={[styles.button, ]}>
//                         <Text style={{ color: 'black', textAlign: 'center' }}>Cancelar</Text>
//                     </TouchableOpacity>
                    
//                     <TouchableOpacity onPress={handleSave} style={[styles.button, ]}>
//                         <Text style={{ color: '#408639', textAlign: 'center' }}>Colocar</Text>
//                     </TouchableOpacity>
                    
//                     </View>
//                 </View>
//             </View>        
        
//         }




// <CustomInputFeild focus={true} labelName='Precios' value={Prices} onChangeText={(text) => setPrices(text)}/>
// <TouchableOpacity style={styles.buttonContainer} onPress={()=>navigation.navigate('ImagesAdd')}>
// <View style={styles.textContainer}>  
//                 <Text style={styles.mainText}>Imágenes</Text>
//                 <Icons name='arrow-forward-ios' size={20} color="rgba(64, 134, 57, 1)" />

//             </View>
// </TouchableOpacity>
// <Display/>
// </ScrollView>
// <View style={[styles.buttonNextButton,{marginTop:10,backgroundColor:'white'}]}>
//           <Buttons loading={loading} text='¿Terminaste de agregar campos?' Link={handleNavigate} />
//           </View>
         
//       </View>
   


//   );
// };

// const styles = StyleSheet.create({
//     buttonContainer: {
//         backgroundColor: 'white',
//         borderRadius: 5,
//         fontFamily:Fonts.MEDIUM,
//         flexDirection: 'row',
//         alignItems: 'center',
//         paddingBottom: 10,
//         paddingTop:10
//     },
//     textContainer: {
//         flex: 1, // Take remaining space
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent:'space-between',
//         height:60,// width: 345,
//         paddingLeft: 12,
//         padding: 16,
//         paddingRight: 25,
//         fontSize: 14,
//         lineHeight: 20,
//         borderRadius: 10,
//         borderWidth: 0.25,
//         borderColor: 'rgba(0, 0, 0, 0.25)',
//         shadowOffset: { width: 0, height: 1 },
//         shadowRadius: 2,
//         shadowOpacity: 1,
//         color: '#212121',
//         fontFamily: Fonts.MEDIUM,
//         backgroundColor: 'rgba(64, 134, 57, 0.05)'

//     },
//     mainText: {
//         paddingLeft: 8,
//         color: '#212121',
//         fontFamily: Fonts.MEDIUM,
//         fontSize: 15,
//         letterSpacing:0.5
//     },

//   container: {
//     flex: 1,
//   },
//   buttonNextButton:{
//     // position: 'absolute',
//   // width: 340,
//   bottom: 10,
//   backgroundColor:'white'
//   },

//   form: {
//     backgroundColor: '#fff',
//     flex: 1,
//     // position: 'relative',
//     paddingTop: 10,
//   },
//   inputContainer: {
//         // position: 'relative',
//         flex: 1,
//         marginLeft: 20,
//         marginRight: 30,
//       },


//       mainHeadingTop:{
//         fontFamily: Fonts.BOLD,
//         fontSize: 26,
//         paddingBottom: 30,
//         textAlign:'center',
//         paddingTop:10,
//         color:'black',
//         lineHeight:36
    
//     },
//     buttonSetClear: {
//         flexDirection: 'row',
//         justifyContent: "space-between",
//         alignItems:'center'
//     },
//     TextHeading: {
//         fontFamily: Fonts.MEDIUM,
//         fontSize: 12,
//         paddingBottom: 10,
//         paddingTop: 10,
//     },
//     WeekDays: {
//         backgroundColor: 'rgba(33, 33, 33, 0.15)',
//         borderRadius: 100,
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 3,
//     },
//     WeekDaysText: {
//         color: 'white',
//         textAlign: 'center',
//         fontFamily: Fonts.MEDIUM,
//         fontSize: 12,
//     },
//     inputfeildD: {
//         width: 85,
//         borderRadius: 8,
//         borderWidth: 2,
//         textAlign: 'center',
//         fontSize: 30,
//         color: '#212121',
//         fontFamily: Fonts.REGULAR,
//         marginRight: 10,
//     },
//     periodButton: {
//         backgroundColor: 'white',
//         padding: 6,
//         marginLeft: 10,
//         borderWidth: 0.5,
//         borderTopRightRadius: 5,
//         borderTopLeftRadius: 5,
//         width: 70,
    
//     },
//     periodText: {
//         fontFamily: Fonts.MEDIUM,
//         fontSize: 14,
//         textAlign: 'center',
//     },
//     button: {
//         padding: 10,
//     },
//     mainContainerSlip: {
//         backgroundColor: 'rgba(64, 134, 57, 0.05)',
//         padding: 15,
//         borderRadius: 16,
//         borderColor: '#408639',
//         borderWidth: 1,
//         paddingHorizontal: 20,
//         paddingVertical: 20,
//     },
//     MainContainer: {
//         flex: 1,
//         backgroundColor: 'white',
//     },

// });

// export default Sigup;
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import CustomInputFeild from '../../../components/inputFeildCustom'
import Icons from 'react-native-vector-icons/MaterialIcons'
import Buttons from '../../../components/Button';
import { Fonts } from '../../style';
import Display from './Display';
import { useSelector } from 'react-redux';
import Dot from 'react-native-vector-icons/Entypo';
import Watch from 'react-native-vector-icons/Ionicons'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL_POST = 'https://kickers-backend-5e360941484b.herokuapp.com/api/court/createCourtFields';

const Signup = ({ navigation }) => {
  const soccerList = useSelector((state) => state?.feild?.soccerList)
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);
  const [openingHour, setOpeningHour] = useState('');
  const [openingMinute, setOpeningMinute] = useState('');
  const [openingPeriod, setOpeningPeriod] = useState('AM');
  const [closingHour, setClosingHour] = useState('');
  const [closingMinute, setClosingMinute] = useState('');
  const [closingPeriod, setClosingPeriod] = useState('AM');
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const handleFocus = (index) => {
    setFocusedIndex(index);
  };

  const handleBlur = () => {
    setFocusedIndex(-1);
  };

  const toggleDaySelection = (day) => {
    const isSelected = selectedDays.includes(day);
    if (isSelected) {
      setSelectedDays(selectedDays.filter((selectedDay) => selectedDay !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const handleSave = () => {
    if (
      openingHour === '' ||
      openingMinute === '' ||
      closingHour === '' ||
      closingMinute === ''
    ) {
      Alert.alert('Error', 'Please fill all fields');
    } else {

      const openingTime = `${openingHour.padStart(2, '0')}:${openingMinute.padStart(2, '0')} ${openingPeriod}`;
      const closingTime = `${closingHour.padStart(2, '0')}:${closingMinute.padStart(2, '0')} ${closingPeriod}`;

      const payload = {
        name: CourtName,
        location: Location,
        Prices: Prices,
        openingTime: openingTime,
        fields: soccerList,
        days: selectedDays,
        closingTime: closingTime
      };

      // Now you can make your API request with the payload
      postCourtData(payload);
    }
  };

  const postCourtData = async (payload) => {
    try {
      const response = await axios.post(API_URL, payload);
      if (response.data.status) {
        const { accessTokenCourt, user } = response.data.data;
        await AsyncStorage.getItem('accessTokenCourt', accessTokenCourt);
        await AsyncStorage.getItem('user', JSON.stringify(user));
        Alert.alert('Success', 'Court data posted successfully');
        navigation.navigate('AnalyticsScreen');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to post court data');
      console.error('API request error:', error);
    }
  };

  const handleClear = () => {
    setOpeningHour('');
    setOpeningMinute('');
    setOpeningPeriod('AM');
    setClosingHour('');
    setClosingMinute('');
    setClosingPeriod('AM');
    setSelectedDays([]);
  };

  const [loading, setLoading] = useState(false);
  const [CourtName, setCourtName] = useState('')
  const [Location, setLocation] = useState('')
  const [Prices, setPrices] = useState('')

  const openingTime = `${openingHour}:${openingMinute} ${openingPeriod}`
  const closingTime = `${openingHour}:${openingMinute} ${openingPeriod}`

  const logData = () => {
    if (
      openingHour === '' ||
      openingMinute === '' ||
      closingHour === '' ||
      closingMinute === '' ||
      CourtName === '' ||
      Location === '' ||
      Prices === ''
    ) {
      Alert.alert('Error', 'Please fill all fields');
    } else {

      let payloay = {
        name: CourtName,
        location: Location,
        Prices: Prices,
        openingTime: openingTime,
        fields: soccerList,
        days: selectedDays,
        closingTime: closingTime
      }

      navigation.navigate('AnalyticsScreen')
      console.log("yyyasdasdyasdyasdyasdyasdyasdyasdyasdy", payloay);
    }
  };
  let payloay = {
    name: CourtName,
    location: Location,
    Prices: Prices,
    openingTime: openingTime,
    fields: soccerList,
    days: selectedDays,
    closingTime: closingTime
  }
//   const handleNavigate = async () => {
//     // setLoading(true);
//     if (openingHour === '' ||
//       openingMinute === '' ||
//       closingHour === '' ||
//       closingMinute === '' ||
//       CourtName === '' ||
//       Location === '' ||
//       Prices === '') {
//       Alert.alert('Incomplete Details', 'Please fill in all fields.');
//     } else {
//       // setLoading(true);
// console.log(payloay)
//       try {
//         const response = await axios.post(API_URL, {
//           ...payloay
//         });
//         if (response.data.status) {
//           const { accessTokenCourt, user } = response.data.data;
//           await AsyncStorage.setItem('accessTokenCourt', accessTokenCourt);
//           await AsyncStorage.setItem('user', JSON.stringify(user));
//           Alert.alert(JSON.stringify(response.data));
//           navigation.navigate('AnalyticsScreen');
//         }
//       } catch (error) {

//         Alert.alert(JSON.stringify(error.response));
//       }
//       setTimeout(() => {

//         setLoading(false);
//       }, 2000);
//     }
//   };
const [responseData, setResponseData] = useState(null);
const handleNavigate = async () => {  
  try {
    if (openingHour === '' ||
          openingMinute === '' ||
          closingHour === '' ||
          closingMinute === '' ||
          CourtName === '' ||
          Location === '' ||
          Prices === '') {
          Alert.alert('Please fill select the Número de dorsal');
      }  
      else{
           setLoading(true);
        setTimeout(() => {
            
          setLoading(false);
        }, 200);
      const accessToken = await AsyncStorage.getItem('accessTokenCourt'); // Replace with your actual access token
    const apiUrl = API_URL_POST; // Replace with your actual API endpoint
   
  //  console.log(payload,accessToken)
    const response = await axios.post(apiUrl, payloay, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });
    setResponseData(response.data);
    console.log('Data posted successfully:', response.data);
    navigation.navigate('AnalyticsScreen');
  }
         
  } catch (error) {
    console.error('Error posting data:', error);
  }
  }

  return (

    <View style={[styles.inputContainer, { paddingTop: 0 }]}>
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <CustomInputFeild focus={true} labelName='Nombre del tribunal' value={CourtName}
          onChangeText={(text) => setCourtName(text)}
        />

        <CustomInputFeild focus={true} labelName='Ubicación' value={Location} onChangeText={(text) => setLocation(text)} />
        <TouchableOpacity style={styles.buttonContainer} onPress={() => setShowDropdown(!showDropdown)}>
          <View style={styles.textContainer}>
            <Text style={styles.mainText}>Horarios</Text>
            <Icons name="arrow-forward-ios" size={20} color="rgba(64, 134, 57, 1)" />
          </View>
        </TouchableOpacity>
        {showDropdown &&

          <View style={styles.mainContainerSlip}>
            <Text style={styles.TextHeading}>Día</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <TouchableOpacity
                  key={day}
                  onPress={() => toggleDaySelection(day)}
                  style={[styles.WeekDays, {
                    backgroundColor: selectedDays.includes(day) ? '#408639' : 'rgba(33, 33, 33, 0.15)',
                    height: 35,
                    width: 35,
                  }
                  ]}
                >
                  <Text style={[styles.WeekDaysText, { color: selectedDays.includes(day) ? 'white' : 'black' }]}>{day}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={{ marginBottom: 10 }}>
              <Text style={styles.TextHeading}>Hora de apertura</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View>
                  <TextInput
                    placeholderTextColor='#212121'
                    backgroundColor="white"
                    placeholder="HH"
                    keyboardType="numeric"
                    maxLength={2}
                    value={openingHour}
                    onChangeText={(text) => setOpeningHour(text.replace(/[^0-9]/g, ''))}
                    onFocus={() => handleFocus(1)}
                    onBlur={handleBlur}
                    style={[
                      styles.inputfeildD,
                      { borderColor: focusedIndex === 1 ? '#212121' : 'white' },
                    ]}
                  />
                  <Text style={[styles.TextHeading, { paddingTop: 2 }]}>Hora</Text>
                </View>
                <View>
                  <Dot name='dots-two-vertical' style={{ fontSize: 38, color: '#212121', width: 30, textAlign: 'center', paddingBottom: 30 }} />
                </View>
                <View>
                  <TextInput
                    placeholder="MM"
                    keyboardType="numeric"
                    placeholderTextColor='#212121'
                    backgroundColor="white"
                    maxLength={2}
                    value={openingMinute}
                    onChangeText={(text) => setOpeningMinute(text.replace(/[^0-9]/g, ''))}
                    onFocus={() => handleFocus(2)}
                    onBlur={handleBlur}
                    style={[
                      styles.inputfeildD,
                      { borderColor: focusedIndex === 2 ? '#212121' : 'white' },
                    ]}
                  />
                  <Text style={[styles.TextHeading, { paddingTop: 2, paddingLeft: 10 }]}>Minuto</Text>
                </View>
                <View style={{ marginTop: -30 }}>
                  <TouchableOpacity onPress={() => setOpeningPeriod('AM')} style={[styles.periodButton, { backgroundColor: openingPeriod === 'AM' ? 'black' : 'white' }]}>
                    <Text style={[styles.periodText, { color: openingPeriod === 'AM' ? 'white' : 'black' }]}>AM</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setOpeningPeriod('PM')} style={[styles.periodButton, { backgroundColor: openingPeriod === 'PM' ? 'black' : 'white', borderBottomRightRadius: 5, borderBottomLeftRadius: 5, borderTopRightRadius: 0, borderTopLeftRadius: 0 }]}>
                    <Text style={[styles.periodText, { color: openingPeriod === 'PM' ? 'white' : 'black' }]}>PM</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View >
              <Text style={styles.TextHeading}>Horario de cierre</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View>
                  <TextInput
                    placeholder="HH"
                    keyboardType="numeric"
                    placeholderTextColor='#212121'
                    backgroundColor="white"
                    maxLength={2}
                    value={closingHour}
                    onChangeText={(text) => setClosingHour(text.replace(/[^0-9]/g, ''))}
                    onFocus={() => handleFocus(3)}
                    onBlur={handleBlur}
                    style={[
                      styles.inputfeildD,
                      { borderColor: focusedIndex === 3 ? '#212121' : 'white' },
                    ]}
                  />
                  <Text style={[styles.TextHeading, { paddingTop: 2 }]}>Hora</Text>
                </View>
                <View>
                  <Dot name='dots-two-vertical' style={{ fontSize: 38, color: '#212121', width: 30, textAlign: 'center', paddingBottom: 30 }} />
                </View>
                <View >
                  <TextInput
                    placeholder="MM"
                    keyboardType="numeric"
                    placeholderTextColor='#212121'
                    backgroundColor="white"
                    maxLength={2}
                    value={closingMinute}
                    onChangeText={(text) => setClosingMinute(text.replace(/[^0-9]/g, ''))}
                    onFocus={() => handleFocus(4)}
                    onBlur={handleBlur}
                    style={[
                      styles.inputfeildD,
                      { borderColor: focusedIndex === 4 ? '#212121' : 'white' },
                    ]}
                  />
                  <Text style={[styles.TextHeading, { paddingTop: 2, paddingLeft: 10 }]}>Minuto</Text>
                </View>
                <View style={{ marginTop: -30 }}>
                  <TouchableOpacity onPress={() => setClosingPeriod('AM')} style={[styles.periodButton, { backgroundColor: closingPeriod === 'AM' ? 'black' : 'white', }]}>
                    <Text style={[styles.periodText, { color: closingPeriod === 'AM' ? 'white' : 'black' }]}>AM</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setClosingPeriod('PM')} style={[styles.periodButton, { backgroundColor: closingPeriod === 'PM' ? 'black' : 'white', borderBottomRightRadius: 5, borderBottomLeftRadius: 5, borderTopRightRadius: 0, borderTopLeftRadius: 0 }]}>
                    <Text style={[styles.periodText, { color: closingPeriod === 'PM' ? 'white' : 'black' }]}>PM</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View >
            <View style={styles.buttonSetClear}>
              <Watch name="time-outline" style={{ color: 'black', fontSize: 25 }} />
              <View style={{ flexDirection: 'row', justifyContent: "flex-end", alignItems: 'center' }}>
                <TouchableOpacity onPress={handleClear} style={[styles.button,]}>
                  <Text style={{ color: 'black', textAlign: 'center' }}>Cancelar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleSave} style={[styles.button,]}>
                  <Text style={{ color: '#408639', textAlign: 'center' }}>Colocar</Text>
                </TouchableOpacity>

              </View>
            </View>
          </View>

        }




        <CustomInputFeild focus={true} labelName='Precios' value={Prices} onChangeText={(text) => setPrices(text)} />
        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('ImagesAdd')}>
          <View style={styles.textContainer}>
            <Text style={styles.mainText}>Imágenes</Text>
            <Icons name='arrow-forward-ios' size={20} color="rgba(64, 134, 57, 1)" />

          </View>
        </TouchableOpacity>
        <Display />
      </ScrollView>
      <View style={[styles.buttonNextButton, { marginTop: 10, backgroundColor: 'white' }]}>
        <Buttons  text='¿Terminaste de agregar campos?' Link={handleNavigate} />
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
    // position: 'absolute',
    // width: 340,
    bottom: 10,
    backgroundColor: 'white'
  },

  form: {
    backgroundColor: '#fff',
    flex: 1,
    // position: 'relative',
    paddingTop: 10,
  },
  inputContainer: {
    // position: 'relative',
    flex: 1,
    marginLeft: 20,
    marginRight: 30,
  },


  mainHeadingTop: {
    fontFamily: Fonts.BOLD,
    fontSize: 26,
    paddingBottom: 30,
    textAlign: 'center',
    paddingTop: 10,
    color: 'black',
    lineHeight: 36

  },
  buttonSetClear: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center'
  },
  TextHeading: {
    fontFamily: Fonts.MEDIUM,
    fontSize: 12,
    paddingBottom: 10,
    paddingTop: 10,
  },
  WeekDays: {
    backgroundColor: 'rgba(33, 33, 33, 0.15)',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
  },
  WeekDaysText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: Fonts.MEDIUM,
    fontSize: 12,
  },
  inputfeildD: {
    width: 85,
    borderRadius: 8,
    borderWidth: 2,
    textAlign: 'center',
    fontSize: 30,
    color: '#212121',
    fontFamily: Fonts.REGULAR,
    marginRight: 10,
  },
  periodButton: {
    backgroundColor: 'white',
    padding: 6,
    marginLeft: 10,
    borderWidth: 0.5,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    width: 70,

  },
  periodText: {
    fontFamily: Fonts.MEDIUM,
    fontSize: 14,
    textAlign: 'center',
  },
  button: {
    padding: 10,
  },
  mainContainerSlip: {
    backgroundColor: 'rgba(64, 134, 57, 0.05)',
    padding: 15,
    borderRadius: 16,
    borderColor: '#408639',
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  MainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

});

export default Signup;
