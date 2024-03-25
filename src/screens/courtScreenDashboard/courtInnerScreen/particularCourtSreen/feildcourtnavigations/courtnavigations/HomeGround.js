import React, { useEffect, useState } from 'react';
import { Text, View, StatusBar, StyleSheet, ScrollView, TouchableOpacity, Modal } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import { Fonts } from '../../../../../style';
import { Calendar } from 'react-native-calendars';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FirstIconsButton from '../../../../../../components/FirstIconCenterTextbtn';
import { format } from 'date-fns';
import AsyncStorage from '@react-native-async-storage/async-storage';
const API_URL_GET = 'https://kickers-backend-5e360941484b.herokuapp.com/api/court/getTimeSlots'
const Dashboard = ({ navigation, route }) => {
  const { PerHour, SecHour, ThirdHour, item } = route.params;
  const [isEnabled, setIsEnabled] = useState(true);
  const [selectedDate, setSelectedDate] = useState('');
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedTime, setSelectedTime] = useState([]);
  const [courtData, setCourtData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [scheduleTimings, setScheduleTimings] = useState([]);
  const [timeSlots,setTimeSlots] = useState([])
  const handleTimeSlotPress = (timeSlot) => {
    setSelectedTime([...selectedTime,timeSlot]);
    console.log('Selected Time:', selectedTime,courtData,"timeSlot",timeSlots);
  };
console.log("6aasdas",item)

  const handleDayPress = (day) => {
    const formattedDate = format(new Date(day.dateString), 'd MMM yyyy');
    setSelectedDate(formattedDate);
    setPopupVisible(false);
  };
  useEffect(() => {
    const fetchCourtData = async () => {
        try {
            const accessToken = await AsyncStorage.getItem('accessTokenCourt');
    
            const yourDate = selectedDate; // Replace with the actual date

            const response = await fetch(`${API_URL_GET}?fieldId=${item._id}&date=${yourDate}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (response.ok) {
                const responseData = await response.json();
                setTimeSlots(responseData.data)
                console.log('API Response Data:', responseData.data); 
              
            } else {
                console.error('Error fetching court data:', response.statusText);
                console.error('Response Body:', await response.text()); // Log the response body for more details
            }
        } catch (error) {
            console.error('Error fetching court data:', error);
        }finally{
          setLoading(false);
        }
    };

    fetchCourtData();
}, [selectedDate]);


  return (
    <View style={styles.MainContainer}>
      <ScrollView style={styles.scrollEdit} backgroundColor={'white'}>
        {/* <StatusBar backgroundColor={'white'} barStyle="dark-content" /> */}
        <View style={styles.rowContainer}>
          <View style={styles.containerFlex}>
            <Text style={styles.paragraphs}>{item.name}</Text>
            <TouchableOpacity onPress={()=>{navigation.navigate('EditCourtFeild',{item})}}>
              <Text style={styles.buttonEdit}>Editar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.mainContainerSheduleTiming, { flexDirection: 'none', alignItems: 'none' }]}>
          {scheduleTimings.map((schedule, index) => (
            <View key={index} style={styles.timingContainer}>
              <Text style={styles.day}>{schedule.day}</Text>
              <Text style={styles.timing}>${schedule.timing}.00</Text>
            </View>
          ))}
        </View>
        <View style={[styles.containerFlex, { marginTop: -8 }]}>
          <Text style={styles.paragraphs}>Ranuras de tiempo</Text>
          <TouchableOpacity>
            <Text style={styles.buttonEdit}>Editar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View style={styles.containerSelcetDateClen}>
            <TouchableOpacity onPress={() => setPopupVisible(true)}>
              <Text style={styles.selectTime}>
              {selectedDate ? selectedDate : 'Seleccionar Fecha'}
              </Text>
            </TouchableOpacity>
          </View>
          <Modal
            visible={popupVisible}
            transparent={true}
            animationType="fade"
            onRequestClose={() => setPopupVisible(false)}>
            <View style={styles.modalContainer}>
              <View style={styles.popup}>
                <Calendar
                  onDayPress={handleDayPress}
                  style={styles.calendar}
                  theme={{
                    backgroundColor: 'rgba(64, 134, 57, 0.05)',
                    calendarBackground: 'rgba(64, 134, 57, 0.05)',
                    textSectionTitleColor: 'black',
                    selectedDayTextColor: 'white',
                    selectedDayBackgroundColor: 'green',
                    todayTextColor: 'green',
                    dayTextColor: '#2d4150',
                    textDisabledColor: '#8C8C8C',
                    dotColor: '#00adf5',
                    selectedDotColor: 'black',
                    arrowColor: 'black',
                    monthTextColor: 'black',
                    textDayFontFamily: Fonts.MEDIUM,
                    textMonthFontFamily: Fonts.MEDIUM,
                    textDayHeaderFontFamily: Fonts.MEDIUM,
                    textDayFontSize: 15,
                    textMonthFontSize: 15,
                    textDayHeaderFontSize: 14,
                    borderWidth: 0,
                    borderRadius: 12
                  }}
                  // markedDates={{
                    markedDates={{ [selectedDate]: { selectedDate: true, selectedColor: 'blue' } }}
                    
                />
              </View>
            </View>
          </Modal>
        </View>
        <View style={styles.mainContainerSheduleTiming}>
          <Text style={[styles.timing, { fontSize: 15 }]}>Mostrar solo espacios disponibles</Text>
          <ToggleSwitch
            onPress={() => ''}
            isOn={isEnabled}
            onColor="#408639"
            offColor="#EEE"
            size=" Medium"
            onToggle={() => setIsEnabled(!isEnabled)} />
        </View>
        {isEnabled && (
          <View style={{ paddingTop: 5, marginTop: -1, paddingBottom: 13 }}>
            {timeSlots.length === 0 ? (
              <View style={{ paddingTop: 30 }}>
                <FontAwesome name='calendar-times-o' style={{ textAlign: 'center', color: '#6F6F6F', fontSize: 60 }} />
                <Text style={styles.empltyText}>
                  No hay ranuras de tiempo disponibles en este momento.
                </Text>
              </View>
            ) : (
              <View style={{ marginTop: 10, paddingLeft: 10, paddingRight: 5, flexDirection: 'row', justifyContent: 'flex-start', width: 380, flexWrap: 'wrap', gap: 5 }}>
                {timeSlots.map((slots, index) => (
                  <TouchableOpacity key={slots._id} onPress={() => handleTimeSlotPress(slots._id)}>
                    <Text style={[styles.timeSlotsText, { backgroundColor: selectedTime === slots._id ? 'black' : 'transparent', color: selectedTime === slots._id ? 'white' : 'black' }]}>
                      {slots.time}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        )}
        <View style={{ marginTop: 20, paddingBottom: 20, paddingLeft: 15, paddingRight: 15 }}>
          <TouchableOpacity onPress={() => console.log('getTime', selectedDate)}>
            <FirstIconsButton text="Agregar comentario" FirstIcon="plus-box-outline" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerSelcetDateClen: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10,
    paddingTop: 5
  },
  timeSlotsText: {
    fontFamily: Fonts.MEDIUM,
    fontSize: 13,
    color: '#000',
    borderWidth: 1,
    borderColor: 'rgba(33, 33, 33, 0.50)',
    width: 85,
    textAlign: 'center',
    borderRadius: 8,
    padding: 8
  },
  empltyText: {
    textAlign: 'center',
    fontSize: 18,
    paddingLeft: 15,
    paddingRight: 10,
    fontFamily: Fonts.MEDIUM,
    paddingTop: 20
  },
  buttonEdit: {
    marginRight: 15,
    marginTop: 10,
    backgroundColor: 'rgba(64, 134, 57, 0.15)',
    borderRadius: 42,
    borderColor: 'rgba(64, 134, 57, 0.25);',
    borderWidth: 0.5,
    textAlign: 'center',
    width: 60,
    padding: 3,
    color: '#408639',
    fontFamily: Fonts.REGULAR,
    fontSize: 12
  },
  containerFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainContainerSheduleTiming: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  timingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  day: {
    fontSize: 16,
    color: '#6F6F6F',
    fontFamily: Fonts.MEDIUM,
    letterSpacing: 0.2
  },
  timing: {
    fontSize: 13,
    color: '#000',
    fontFamily: Fonts.MEDIUM,
    letterSpacing: 0.2
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectTime: {
    fontSize: 16,
    color: '#000',
    fontFamily: Fonts.MEDIUM,
    letterSpacing: 0.2
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    padding: 10,
    width: 350
  },
  calendar: {
    borderRadius: 10,
  },
  MainContainer: {
    backgroundColor: 'white',
    height: "100%"
  },
  paragraphs: {
    fontSize: 18,
    color: 'black',
    letterSpacing: 0.1,
    lineHeight: 36,
    fontFamily: Fonts.BOLD,
    paddingLeft: 15,
    paddingRight: 10,
    paddingTop: 10
  },
  scrollEdit: {
    flex: 1
  }
});

export default Dashboard;
