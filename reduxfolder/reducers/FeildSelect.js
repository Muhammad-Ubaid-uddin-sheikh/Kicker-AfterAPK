const initialState = {
  selectedImages: [],
  favoriteImageIndex: 0,
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SELECTED_IMAGES':
      return {
        ...state,
        selectedImages: action.payload,
      };
    case 'SET_FAVORITE_IMAGE_INDEX':
      return {
        ...state,
        favoriteImageIndex: action.payload,
      };
    default:
      return state;
  }
};

export const setSelectedImages = (images) => ({
  type: 'SET_SELECTED_IMAGES',
  payload: images,
});

export const setFavoriteImageIndex = (index) => ({
  type: 'SET_FAVORITE_IMAGE_INDEX',
  payload: index,
});

export default imageReducer;
// export const ADD_IMAGE = 'ADD_IMAGE';
// export const REMOVE_IMAGE = 'REMOVE_IMAGE';
// export const SET_FAVORITE_IMAGE = 'SET_FAVORITE_IMAGE';

// // Action creators
// export const addImage = (imagePath) => ({
//   type: ADD_IMAGE,
//   payload: imagePath,
// });

// export const removeImage = (index) => ({
//   type: REMOVE_IMAGE,
//   payload: index,
// });

// export const setFavoriteImage = (index) => ({
//   type: SET_FAVORITE_IMAGE,
//   payload: index,
// });


