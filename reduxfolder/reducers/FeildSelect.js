// const initialState = {
//     soccerList: [],
//     selectedDays: [],
//     openingHour: '',
//     openingMinute: '',
//     openingPeriod: 'AM',
//     closingHour: '',
//     closingMinute: '',
//     closingPeriod: 'AM',
//   };
  
//   const soccerReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'ADD_SOCCER':
//         return {
//           ...state,
//           soccerList: [...state.soccerList, action.payload],
//           selectedDays: action.payload.selectedDays || [],
//           openingHour: action.payload.openingHour || '',
//           openingMinute: action.payload.openingMinute || '',
//           openingPeriod: action.payload.openingPeriod || 'AM',
//           closingHour: action.payload.closingHour || '',
//           closingMinute: action.payload.closingMinute || '',
//           closingPeriod: action.payload.closingPeriod || 'AM',
//         };
//       case 'DELETE_SOCCER':
//         return {
//           ...state,
//           soccerList: state.soccerList.filter((item, index) => index !== action.payload),
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default soccerReducer;
const initialState = {
  soccerList: [],
  
  
};

const soccerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SOCCER':
      return {
        ...state,
                  soccerList: [...state.soccerList, action.payload],
      };
    case 'DELETE_SOCCER':
      return {
        ...state,
        soccerList: state.soccerList.filter((item, index) => index !== action.payload),

      };
    default:
      return state;
  }
};

export default soccerReducer;


