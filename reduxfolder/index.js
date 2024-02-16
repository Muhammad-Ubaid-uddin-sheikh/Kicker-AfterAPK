import { combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import teamReducer from './reducers/teamReducer'
import SoccerReducer from './reducers/FeildSelect'
const rootReducer = combineReducers({
    user: userReducer,
    team: teamReducer,
    feild: SoccerReducer
});

export default rootReducer;
