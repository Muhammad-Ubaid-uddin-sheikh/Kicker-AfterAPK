// import React, {useState} from 'react';
// import {Calendar, LocaleConfig} from 'react-native-calendars';
// import { Fonts } from '../../../style';

// const App = () => {
//   const [selected, setSelected] = useState('');
//   const apiResponse = [
//     {"date": "Sun Mar 25 2024", "occupancy": "less than half occupied", "occupiedSlots": 2, "totalSlots": 15},
//     {"date": "Tue Mar 26 2024", "occupancy": "less than half occupied", "occupiedSlots": 2, "totalSlots": 15},
//     {"date": "Wed Mar 27 2024", "occupancy": "less than half occupied", "occupiedSlots": 2, "totalSlots": 15},
//     {"date": "Wed Mar 28 2024", "occupancy": "less than half occupied", "occupiedSlots": 2, "totalSlots": 15},
//   ];
  
//   const markedDates = {};
  
//   // Initialize all dates with a red background
//   const currentDate = new Date();
//   const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0); // Get the last day of the current month
  
//   for (let d = new Date(currentDate); d <= endDate; d.setDate(d.getDate() + 1)) {
//     const dateString = d.toISOString().split('T')[0];
//     markedDates[dateString] = {
//       selected: true,
//       marked: true,
//       dotColor: 'red',
//       selectedColor: 'red',
//       textColor: 'black'
//     };
//   }
//   apiResponse.forEach(item => {
//     const date = new Date(item.date);
//     const dateString = date.toISOString().split('T')[0];
//     markedDates[dateString] = {
//       selected: true,
//       selectedColor: 'green',
//       textColor: 'white'
//     };
//   });
  
//   return (
//     <Calendar 
//       onDayPress={day => {
//         setSelected(day.dateString);
//       }}
    
//       style={{
//         textSectionTitleColor: '#b6c1cd',
//         selectedDayBackgroundColor: 'green',
//         selectedDayTextColor: 'rgba(64, 134, 57, 0.05)',
//         width:'auto',
//         borderRadius:15
//       }}
//       // theme={{
//       //   backgroundColor: 'rgba(64, 134, 57, 0.05)',
//       //   calendarBackground: 'rgba(64, 134, 57, 0.05)',
//       //   textSectionTitleColor: 'black',
//       //   selectedDayTextColor: 'white',
//       //   selectedDayBackgroundColor: '#00adf5',
//       //   todayTextColor: 'green',
//       //   dayTextColor: '#2d4150',
//       //   textDisabledColor: '#8C8C8C',
//       //   dotColor: '#00adf5',
//       //   selectedDotColor: 'black',
//       //   arrowColor: 'black',
//       //   monthTextColor: 'black',
//       //   textDayFontFamily: Fonts.MEDIUM,
//       //   textMonthFontFamily: Fonts.MEDIUM,
//       //   textDayHeaderFontFamily: Fonts.MEDIUM,
//       //   textDayFontSize: 15,
//       //   textMonthFontSize: 15,
//       //   textDayHeaderFontSize: 14,
//       //   borderWidth:0,
//       //   borderRadius:12,
//       //   width:350
//       // }}
//       markedDates={markedDates}
  
//     />
//   );
// };

// export default App;
import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { Fonts } from '../../../style';

const App = () => {
  const [selected, setSelected] = useState('');
  const apiResponse = [
    { "date": "Sun Mar 26 2024", "occupancy": "less than half occupied", "occupiedSlots": 2, "totalSlots": 15 },
    // Other API response dates...
  ];

  const markedDates = {};
  const currentDate = new Date();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

  // Initialize all dates of the current month with a red background
  for (let d = new Date(firstDayOfMonth); d <= lastDayOfMonth; d.setDate(d.getDate() + 1)) {
    const dateString = d.toISOString().split('T')[0];
    markedDates[dateString] = {
      selected: true,
      marked: true,
      dotColor: '#FF7575',
      selectedColor: '#FF7575',
      textColor: 'black'
    };
  }

  // Update dates from the API response to have a green background
  apiResponse.forEach(item => {
    const apiDate = new Date(item.date);
    const apiDateString = apiDate.toISOString().split('T')[0];
    if (apiDate.getMonth() === currentDate.getMonth() && apiDate.getFullYear() === currentDate.getFullYear()) {
      markedDates[apiDateString] = {
        selected: true,
        selectedColor: 'green',
        textColor: 'white',
        dotColor: '#00adf5'
      };
    }
  });

  return (
    <Calendar
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      theme={{
        backgroundColor: 'rgba(64, 134, 57, 0.05)',
        calendarBackground: 'rgba(64, 134, 57, 0.05)',
        textSectionTitleColor: 'black',
        selectedDayTextColor: 'black',
        selectedDayBackgroundColor: '#00adf5',
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
        borderRadius: 12,
        width: 350
      }}
      style={{
        textSectionTitleColor: '#b6c1cd',
        selectedDayBackgroundColor: 'green',
        selectedDayTextColor: 'black',
        width: 'auto',
        borderRadius: 15
      }}
      markedDates={markedDates}
    />
  );
};

export default App;

