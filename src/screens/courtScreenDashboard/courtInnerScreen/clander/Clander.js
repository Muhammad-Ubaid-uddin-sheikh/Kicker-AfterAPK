import React, {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';

const App = () => {
  const [selected, setSelected] = useState('');

  return (
    <Calendar 
      onDayPress={day => {
        setSelected(day.dateString);
      }}
    //   markedDates={{
    //     [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
    //   }}
    // // markedDates={{
    //     [selectedDate]: { selected: true, marked: true, selectedColor: 'green' },
    //   }}
    
      style={{
        borderWidth: 1,
        borderColor: 'rgba(64, 134, 57, 0.05)',
        height: 350,
        backgroundColor: 'rgba(64, 134, 57, 0.05)',
        calendarBackground: 'rgba(64, 134, 57, 0.05)',
        textSectionTitleColor: '#b6c1cd',
        selectedDayBackgroundColor: 'green',
        selectedDayTextColor: 'rgba(64, 134, 57, 0.05)',
        todayTextColor: 'rgba(64, 134, 57, 0.05)',
        dayTextColor: 'rgba(64, 134, 57, 0.05)',
        textDisabledColor: '#d9e',
        width:350,
        marginLeft:20,
        borderRadius:15
      }}
      // Specify the current date
      current={'2024-1-1'}
      // Callback that gets called when the user selects a day
    //   onDayPress={day => {
    //     console.log('selected day', day);
    //   }}
      // Mark specific dates as marked
      markedDates={{
        [selected]: {selected: true,  selectedColor: 'rgba(64, 134, 57, 1)'},
        // '2012-03-01': {selected: true,  selectedColor: 'rgba(64, 134, 57, 1)'},
        // '2012-03-02': {marked: true, selectedColor: 'rgba(64, 134, 57, 1)'},
        // '2012-03-03': {selected: true, selectedColor: 'rgba(64, 134, 57, 1)'}
        current:{selected: true,  selectedColor: 'rgba(64, 134, 57, 1)'},
      }}
    />
  );
};

export default App;