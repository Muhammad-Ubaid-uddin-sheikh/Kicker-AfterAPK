export const addSoccer = (soccerData) => ({
    type: 'ADD_SOCCER',
    payload: soccerData,
  });
  export const deleteSoccer = (index) => ({
    type: 'DELETE_SOCCER',
    payload: index,
  });
