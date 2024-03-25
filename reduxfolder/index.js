import { combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import teamReducer from './reducers/teamReducer'
import imageReducer from './reducers/FeildSelect'
const rootReducer = combineReducers({
    user: userReducer,
    team: teamReducer,
    image: imageReducer,
});

export default rootReducer;
